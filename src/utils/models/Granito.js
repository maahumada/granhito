import { model, models, Schema } from "mongoose";

const GranitoSchema = new Schema({
  owner: Schema.Types.ObjectId,
  monto: Number,
  mensaje: String,
  likes: [Schema.Types.ObjectId],
  adjunto: String,
  comentarios: [Schema.Types.ObjectId]
});

export default models.GranitoSchema || model("Granito", GranitoSchema);