// Require Mongoose
const { Schema, model } = require("mongoose");

// Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,  
      trim: true
    },
    email: {
      type: String,
      required: true, 
      unique: true,
      // REGEX email validation 
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
        // Array of _id values referencing the Thought model
        type: Schema.Types.ObjectId,
        ref: "Thought"
      }],
    friends: [{
        // Array of _id values referencing the User model (self-reference)
        type: Schema.Types.ObjectId,
        ref: "User",
      }]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

// Virtual called `friendCount` that retrieves the length of the user's friends array field on query
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model("User", UserSchema);

// Export User model
module.exports = User;
