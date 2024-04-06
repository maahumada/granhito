import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  return NextResponse.json({ method: "GET", success: true });
};

export async function POST(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  return NextResponse.json({ method: "POST", success: true });
};

export async function PUT(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  return NextResponse.json({ method: "PUT", success: true });
};

export async function DELETE(req, { params }){
  try {
    await connectDB();
  }catch(err){
    return NextResponse.json({ error: "Could not connect to Database "});  
  }
  return NextResponse.json({ method: "DELETE", success: true });
};