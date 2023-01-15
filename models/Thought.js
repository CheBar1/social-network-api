// const { ObjectId } = require("bson");
const { Schema, model, Types } = require("mongoose");

// Reaction Schema - SCHEMA ONLY
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
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
      // Set default value to the current timestamp
      type: Date,
      get: (date) => timeSince(date),
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, "Please enter your thought"], // message generated is text not entered
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      // Set default value to the current timestamp
      type: Date,
      get: (date) => timeSince(date),
    },
    // The user that created this thought
    username: {
      type: String,
      required: true,
    },
    // Array of nested documents created with the ReactionSchema
    reactions: [ReactionSchema],
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
// Virtual called `reactionCount` that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

// Export Thought model
module.exports = Thought;
