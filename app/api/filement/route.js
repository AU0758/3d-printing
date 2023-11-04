import Filement from "@/models/filement";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";

export async function POST(req) {
    const {price, name, image, bg, lenght} = await req.json();

    await connectMongoDB();
    await Filement.create({price, name, image, bg, lenght});

    return NextResponse.json({ message: "Filement created successfully" }, { status: 201 });
};