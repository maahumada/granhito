import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const font = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata = {
  title: "granhito",
  description: "by binaryTreeEnjoyers",
};

export default function RootLayout({ children }) {
  return <>
    <html lang="es">
      <body className={font.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  </>;
}