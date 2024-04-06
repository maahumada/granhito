import { model, models, Schema } from "mongoose";

const HitoSchema = new Schema({
  nombre: String,
  owner: Schema.Types.ObjectId,
  objetivo: Number,
  fechaFinal: Date,
  miembros: [Schema.Types.ObjectId],
  cvu: Number,
  alias: String,
  montosSugeridos: [Number],
  granitos: [Schema.Types.ObjectId]
});

export default models.HitoSchema || model("Hito", HitoSchema);