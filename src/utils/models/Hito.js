import { model, models, Schema } from "mongoose";

const HitoSchema = new Schema({

});

export default models.HitoSchema || model("Hito", HitoSchema);