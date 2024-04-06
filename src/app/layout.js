import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import {Providers} from './Providers'
import "./globals.css"

const font = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata = {
  title: "granhito",
  description: "by binaryTreeEnjoyers",
};

export default function RootLayout({ children }) {
  return <>
    <html lang="es">
      <body className={font.className}>
        <Providers>
          <Navbar />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  </>;
}