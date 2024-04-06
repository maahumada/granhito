import { model, models, Schema } from "mongoose";

const UsuarioSchema = new Schema({

});

export default models.UsuarioSchema || model("Usuario", UsuarioSchema);