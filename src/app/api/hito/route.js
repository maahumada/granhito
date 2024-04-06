import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Hito from "@/utils/models/Hito";

export async function GET(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    // Retrieve the specific object by its ID
    const hito = await Hito.findById(id);
    
    // Check if the object is found
    if (hito) {
      return NextResponse.json(hito);
    } else {
        return NextResponse.json({ error: "Hito not found" });
    }
  } else {
    // If no 'id' parameter is provided, retrieve all objects
    const hito = await Hito.find();
    return NextResponse.json(hito);
  };
}

export async function POST(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  const body = await req.json();
  try {
    const hito = await Hito.create(body);
    return NextResponse.json({ success: true, hito });
  } catch (error) {
    return NextResponse.json({ error: "Could not create Hito" });
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
    const hito = await Hito.findByIdAndDelete(body._id);
    return NextResponse.json({ method: "DELETE", success: true });
  }catch(err){
    return NextResponse.json({ error: "Could not change Hito"});  
  }
};



/*
export async function GET(req, { params }){
  const router = require("express").Router();
const Hito = require("../models/Hito");

router.get("/hitos/:id/granitos", async (req, res) => {
  try {
    const hito = await Hito.findById(req.params.id);
    if (!hito) {
      return res.status(404).json({ error: "Hito no encontrado" });
    }
    res.json(hito.granitos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



}

*/