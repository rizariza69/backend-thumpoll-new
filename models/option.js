const mongoose = require("../config/config");
const Schema = mongoose.Schema;
const Autoincrement = require("mongoose-sequence")(mongoose);

const optionSchema = Schema({
  description: {
    type: String,
    required: true
  },
  pollId: { type: Schema.Types.ObjectId, ref: "Polls" },
  voters: [{ type: Schema.Types.ObjectId, ref: "Users" }]
});

optionSchema.plugin(Autoincrement, {
  id: "option_counter",
  inc_field: "id"
});

const Options = mongoose.model("Options", optionSchema);

module.exports = Options;
