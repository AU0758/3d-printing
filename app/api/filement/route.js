import Filement from "@/models/filement";
import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";

export async function POST(req) {
    const { price, name, image, bg, length } = await req.json();

    await connectMongoDB();

    try {
        const filament = await Filement.create({ price, name, image, bg, length });
        console.log("Filament created:", filament);
        return NextResponse.json({ message: "Filament created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating filament:", error);
        return NextResponse.json({ message: "Failed to create filament" }, { status: 500 });
    }
}