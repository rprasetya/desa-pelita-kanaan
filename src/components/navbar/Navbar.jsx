'use client'
import Image from "next/image"
import logo from "@/assets/navigation/logo.png"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const items = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "UMKM",
        url: "/umkm",
    },
    {
        title: "Galeri",
        url: "/galeri",
    },
    {
        title: "Berita",
        url: "/berita",
    },
    {
        title: "Buku Tamu",
        url: "/buku-tamu",
    },
]

const Navbar = () =>{
    const router = useRouter()
    const pathname = usePathname();
    return(
        <nav className="flex justify-between items-center mt-4 border-b border-black pb-2 mx-20">
            <div className="flex gap-5">
                <Image
                    src={logo}
                    height={50}
                    alt="logo kanaan"
                />
                <div className="flex flex-col">
                    <p className="font-bold">Sistem Informasi UMKM</p>
                    <p className="text-sm">Desa Pelita Kanaan</p>
                </div>
            </div>
            <div className="flex gap-5 font-medium text-sm">
                {items.map((item, index) => (
                    <Link 
                        key={index}
                        className={`lg:hover:bg-kanaan-blue lg:hover:text-white rounded transition py-1 px-2 ${pathname === item.url ? 'bg-kanaan-blue text-white' : ''}`} 
                        href={item.url}>{item.title}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar