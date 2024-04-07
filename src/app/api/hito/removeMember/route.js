import connectDB from "@/utils/connectDB";
import Hito from "@/utils/models/Hito";
import { NextResponse } from "next/server";

export async function PUT(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  try {
    const body = await req.json();
    let hito = await Hito.findById(body._id);
    hito.miembros = hito.miembros.filter(m => m != body.member);
    await hito.save();
  }catch(err){
    return NextResponse.json({ status: false });
  }
  return NextResponse.json({ status: true });
}