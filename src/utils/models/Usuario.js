import { model, models, Schema } from "mongoose";

const UsuarioSchema = new Schema({
  nombre: String,
  email: String,
  imagen: String
});

export default models.UsuarioSchema || model("Usuario", UsuarioSchema);