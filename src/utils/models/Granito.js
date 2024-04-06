import { model, models, Schema } from "mongoose";

const GranitoSchema = new Schema({
  owner: Schema.Types.ObjectId,
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
  }
});

export default models.Granito || model("Granito", GranitoSchema);