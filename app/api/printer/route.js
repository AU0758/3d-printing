import Printer from "@/models/printer";
import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";

export async function POST(req) {
    const { price, name, image, bg, length } = await req.json();

    await connectMongoDB();

    try {
        const printer = await Printer.create({ price, name, image, bg, length });
        console.log("Priner Added:", printer);
        return NextResponse.json({ message: "Priner Added successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating Priner:", error);
        return NextResponse.json({ message: "Failed to create Priner" }, { status: 500 });
    }
}
export async function GET() {
    try {
        await connectMongoDB();
        const printers = await Printer.find();
        return NextResponse.json({ printers });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to get data" }, { status: 500 });
    }
}