import { model, models, Schema } from "mongoose";

const UsuarioSchema = new Schema({
  nombre: String,
  email: String,
  imagen: String,
  hitos: {
    type: [Schema.Types.ObjectId],
    ref: "Hito",
    default: []
  }
});

export default models.Usuario || model("Usuario", UsuarioSchema);