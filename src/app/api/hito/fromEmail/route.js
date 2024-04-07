import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Hito from "@/utils/models/Hito";
import Usuario from "@/utils/models/Usuario";

export async function GET(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if(!email){
    return NextResponse.json({error: "email must be sent via query"});
  }
  try{
    let hitoList = await Hito.find();
    hitoList = hitoList.filter(hito => hito.miembros.includes(email));
    return NextResponse.json(hitoList.reverse());
  }catch(err){
    return NextResponse.json({error: "Could not retreive hitos from api"});
  }
  
}