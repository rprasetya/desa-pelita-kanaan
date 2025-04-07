import Image from "next/image";

const KatalogBerita = () => {
    const newsItems = [
        {
          id: 1,
          title: "Pelatihan UMKM: Tingkatkan Kapasitas Pengusaha Desa",
          image: "/berita/gambar1.jpg",
          excerpt:
            "Pemerintah Desa Pelita Kanaan mengadakan pelatihan kewirausahaan untuk para pelaku UMKM dalam rangka meningkatkan daya saing dan kualitas produk lokal.",
        },
        {
          id: 2,
          title: "Festival Budaya Lokal Meriahkan Hari Jadi Desa",
          image: "/berita/gambar4.jpg",
          excerpt:
            "Masyarakat antusias mengikuti Festival Budaya yang diselenggarakan untuk memperingati hari jadi Desa Pelita Kanaan dengan beragam pertunjukan tradisional.",
        },
        // Tambahkan item berita lain di sini
      ];

    return(
        <div className="">
            <h1 className="text-3xl font-bold text-blue-900 my-10">Berita Desa Pelita Kanaan</h1>
            <div className="grid gap-12">
                {newsItems.map((news) => (
                    <div key={news.id} className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
                        <Image
                            src={news.image}
                            alt={news.title}
                            width={100}
                            height={100}
                            className="w-full md:w-1/3 h-64 object-cover"
                        />
                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                            <p className="text-gray-600">{news.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default KatalogBerita