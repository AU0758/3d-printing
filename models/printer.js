import mongoose, {Schema} from "mongoose";

const printerSchema = new Schema(
    {
        price: Number,
        name: String,
        image: String,
        bg: String,
        availability: String,
    }
);
const Printer =  mongoose.models.Printer || mongoose.model("Printer", printerSchema);

export default Printer;