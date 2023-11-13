import Printer from "@/models/printer";
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";

export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse form data
    const data = await req.formData();
    const name = data.get('name') as string;
    const price = data.get('price') as string;
    const bg = data.get('bg') as string;
    const availability = data.get('availability') as string;

    // Handle file upload
    const file: File | null = data.get('file') as unknown as File;
    if (!file) {
      return NextResponse.json({ success: false, error: 'File is required' }, { status: 400 });
    }

    // Convert the file data to a Base64-encoded string
    const base64String = await file.arrayBuffer()
      .then(buffer => Buffer.from(buffer).toString('base64'));

    const imageFormat = file.type.split('/')[1];

    // Create a new Printer instance
    const printer = await Printer.create({
      price,
      name,
      image: `data:image/${imageFormat};base64,${base64String}`,
      bg,
      availability,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing the request:', error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
export async function GET() {
    try {
        await connectMongoDB();
        const printers = await Printer.find();
        console.log(printers)
        return NextResponse.json({ printers });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}