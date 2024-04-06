import { model, models, Schema } from "mongoose";

const ComentarioSchema = new Schema({
  owner: Schema.Types.ObjectId,
  mensaje: String
});

export default models.ComentarioSchema || model("Comentario", ComentarioSchema);