const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
});

module.exports = mongoose.model("Folder", folderSchema);
