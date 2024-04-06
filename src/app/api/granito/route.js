import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Granito from "@/utils/models/Granito";

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
    return NextResponse.json({ error: "Could not retreive Users"});
  }
};

export async function POST(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const body = await req.json();
  console.log(body);
  try {
    const granito = await Granito.create(body);
    return NextResponse.json({ success: true, granito });
  } catch (error) {
    return NextResponse.json({ error: "Could not create User" });
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
    const granito = await Granito.findByIdAndDelete(body._id);
    return NextResponse.json({ method: "DELETE", success: true });
  }catch(err){
    return NextResponse.json({ error: "Could not change User"});  
  }
};