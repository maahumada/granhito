import { model, models, Schema } from "mongoose";

const ComentarioSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  mensaje: String
});

export default models.Comentario || model("Comentario", ComentarioSchema);