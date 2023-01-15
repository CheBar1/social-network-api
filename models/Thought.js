// Require Mongoose
const { Schema, model, Types } = require("mongoose");
// Require moment to format time stamps
const moment = require('moment');

// Reaction Schema - SCHEMA ONLY
const ReactionSchema = new Schema(
  {
    // Set a customer ID
    reactionId: {
      // ObjectID data type in Mongoose
      type: Schema.Types.ObjectId,
      // The default value is set to new ObjectId
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      // Set default value to the current timestamp using moment
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
  },
  {
    toJSON: { getters: true }
  }
);

// Schema to create Thought model
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      // Set default value to the current timestamp
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    // The user that created this thought
    username: {
      type: String,
      required: true
    },
    // Array of nested documents created with the ReactionSchema
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false
  }
)
// Virtual called `reactionCount` that retrieves the length of the thought's reactions array field on query
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize our Thought model
const Thought = model("Thought", ThoughtSchema);

// Export Thought model
module.exports = Thought;
