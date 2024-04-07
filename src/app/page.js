"use client"
import HomeSection from "@/sections/Home";
import { useSession, signIn } from "next-auth/react";

const Home = () => {
  return (
    <HomeSection />
  );
};

export default Home;