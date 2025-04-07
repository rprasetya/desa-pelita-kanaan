import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "UMKM Desa Pelita Kanaan",
  description: "Sistem Informasi UMKM Desa Pelita Kanaan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins} antialiased mb-10`}>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
