import { model, models, Schema } from "mongoose";

const ComentarioSchema = new Schema({

});

export default models.ComentarioSchema || model("Comentario", ComentarioSchema);