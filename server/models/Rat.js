const { Schema, model } = require("mongoose");

const ratSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  fedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  job: {
    type: Schema.Types.ObjectId, 
    ref: "jobs"
  },
  attendedWork: {
    type: Date,
    required: false
  }
});

const Rat = model("rat", ratSchema);

module.exports = Rat;
