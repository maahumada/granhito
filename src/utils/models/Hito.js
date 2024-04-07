import { model, models, Schema } from "mongoose";

const HitoSchema = new Schema({
  nombre: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  ownerEmail: {
    type: String
  },
  objetivo: Number,
  fechaFinal: Date,
  miembros: [String],
  cvu: String,
  alias: String,
  montosSugeridos: [Number],
  granitos: {
    type: [Schema.Types.ObjectId],
    default: [],
    ref: "Granito"
  },
  progreso: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default models.Hito || model("Hito", HitoSchema);