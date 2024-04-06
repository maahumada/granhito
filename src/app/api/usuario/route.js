import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Usuario from "@/utils/models/Usuario";

export async function GET(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const usuario = await Usuario.findById(id);
    if (usuario) {
      return NextResponse.json(usuario);
    } else {
        return NextResponse.json({ error: "User not found" });
    }
  } else {
    const usuario = await Usuario.find();
    return NextResponse.json(usuario);
  };
};

export async function POST(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const body = await req.json();
  try {
    const usuario = await Usuario.create(body);
    return NextResponse.json({ success: true, usuario });
  } catch (error) {
    return NextResponse.json({ error: "Could not create User" });
  }
};

export async function PUT(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }

  try{
    const {_id, nombre, email, imagen} = await req.json();
    const usuario = await Usuario.findByIdAndUpdate(
            _id, 
            {nombre,email,imagen},
            { new:true }
            );
    if(!usuario) {
      return NextResponse.json({ error: "User not found" });
    }
    return NextResponse.json({ success: true, usuario });
  }catch(err){
    return NextResponse.json({ error: "Could not change User"});  
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
    const usuario = await Usuario.findByIdAndDelete(body._id);
    return NextResponse.json({ method: "DELETE", success: true });
  }catch(err){
    return NextResponse.json({ error: "Could not change User"});  
  }
};