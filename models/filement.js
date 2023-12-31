import mongoose, {Schema} from "mongoose";

const filementSchema = new Schema(
    {
        price: Number,
        name: String,
        image: String,
        bg: String,
        length: Number,
    }
);
const Filement = mongoose.models.Filement||mongoose.model("Filement", filementSchema);

export default Filement;