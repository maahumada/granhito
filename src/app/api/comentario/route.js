import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Comentario from "@/utils/models/Comentario";
import Granito from "@/utils/models/Granito";


export async function GET(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  try {
    const comentario = await Comentario.find();
    
    return NextResponse.json(comentario);
  } catch(err) {
    return NextResponse.json({ error: "Could not retreive Commment"});
  }
};


export async function POST(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const body = await req.json();
  const granitoID = await body.granitoID;
  try {
    let granito = await Granito.findById(granitoID);
    const commentario = await Comentario.create(body);
    granito.comentarios.push(commentario._id);
    await granito.save();
    return NextResponse.json({ success: true, commentario });
  } catch (error) {
    return NextResponse.json({ error: "Could not create Comment" });
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
    const commentario = await Comentario.findByIdAndDelete(body._id);
    return NextResponse.json({ method: "DELETE", success: true });
  }catch(err){
    return NextResponse.json({ error: "Could not change Comment"});  
  }
};