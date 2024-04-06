import { model, models, Schema } from "mongoose";

const HitoSchema = new Schema({
  nombre: String,
  owner: Schema.Types.ObjectId,
  objetivo: Number,
  fechaFinal: Date,
  miembros: [Schema.Types.ObjectId],
  cvu: String,
  alias: String,
  montosSugeridos: [Number],
  granitos: [Schema.Types.ObjectId],
  progreso: Number
});

export default models.Hito || model("Hito", HitoSchema);