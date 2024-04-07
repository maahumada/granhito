import { model, models, Schema } from "mongoose";

const GranitoSchema = new Schema({
  owner: String,
  ownerName: String,
  monto: Number,
  mensaje: String,
  likes: {
    type: [Schema.Types.ObjectId],
    ref: "Usuario"
  },
  adjunto: String,
  comentarios: {
    type: [Schema.Types.ObjectId],
    ref: "Comentario"
  },
  verificado: {
    type: Boolean,
    default: false
  }
});

export default models.Granito || model("Granito", GranitoSchema);