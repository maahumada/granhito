import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import {SessionProvider} from 'next-auth/react'
import {Providers} from './Providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "granhito",
  description: "by binaryTreeEnjoyers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
