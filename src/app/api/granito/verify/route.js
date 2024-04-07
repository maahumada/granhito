import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Granito from "@/utils/models/Granito";
import Hito from "@/utils/models/Hito";

export async function PUT(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    const g = await Granito.findByIdAndUpdate(id, {
      verificado: true
    });
    return NextResponse.json({ success: true, granito: g });
  }catch(err){
    return NextResponse.json({ error: "Could not update granito" });
  }
};