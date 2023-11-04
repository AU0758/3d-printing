import mongoose, {Schema} from "mongoose";

const filementSchema = new Schema(
    {
        price: Number,
        name: String,
        image: String,
        bg: String,
        lenght: Number,
    }
);
const Filement = mongoose.model.Filement;

export default Filement;