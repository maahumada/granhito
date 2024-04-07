import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Granito from "@/utils/models/Granito";
import Hito from "@/utils/models/Hito";

export async function GET(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  try {
    const granitos = await Granito.find();
    return NextResponse.json(granitos);
  } catch(err) {
    return NextResponse.json({ error: "Could not retreive Granito"});
  }
};

export async function POST(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const body = await req.json();
  const hitoID = await body.hitoID;
  try {
    let hito = await Hito.findById(hitoID);
    const granito = await Granito.create(body);
    hito.granitos.push(granito._id);
    hito.progreso += granito.monto;
    await hito.save();
    return NextResponse.json({ success: true, granito });
  } catch (error) {
    return NextResponse.json({ error: "Could not create Granito" });
  }
};

export async function DELETE(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  try{
    const body = await req.json();
    const granito = await Granito.findByIdAndDelete(body.id);
    let hito = await Hito.findById(body.hitoID);
    hito.progreso -= granito.monto;
    await hito.save();
    return NextResponse.json({ method: "DELETE", success: true, granito });
  }catch(err){
    return NextResponse.json({ error: "Could not change Granito"});  
  }
};