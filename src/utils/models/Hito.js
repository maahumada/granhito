import { model, models, Schema } from "mongoose";

const HitoSchema = new Schema({
  nombre: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  objetivo: Number,
  fechaFinal: Date,
  miembros: {
    type: [Schema.Types.ObjectId],
    ref: "Usuario"
  },
  cvu: String,
  alias: String,
  montosSugeridos: [Number],
  granitos: {
    type: [Schema.Types.ObjectId],
    ref: "Granito"
  }
});

export default models.Hito || model("Hito", HitoSchema);