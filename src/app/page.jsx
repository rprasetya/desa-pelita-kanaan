export default function Home() {
  return (
    <>
      <div className="bg-[url(/home/kantor_desa.jpeg)] bg-cover">
        <div className="flex h-full items-center bg-gradient-to-r py-52 from-blue-950 via-blue-950/75 to-transparent">
          <div className="mx-20 ">
            <h1 className="text-white"> Selamat Datang di Sistem Informasi UMKM</h1>
            <p className="text-white text-5xl font-semibold">Desa Pelita Kanaan</p>
          </div>
        </div>
      </div>

      <section className="bg-white text-gray-800 py-16 px-6 md:px-20 space-y-16">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-blue-900">Sejarah Desa</h2>
          <p className="text-justify leading-relaxed max-w-4xl">
            Desa Pelita bermula saat pembangunan Kabiran dan Tanjung Sepatui, yang terletak di Kabupaten Malinau. Tanjung Sepatui pertama kali didirikan pada tahun 1969 yang dipimpin oleh Bapak Radang Sabi yang mengatur dan memimpin penduduk desa tersebut yang mayoritas penduduknya bersuku Dayak Lundayeh dan beragama Kristen Protestan. Pada tahun 1970 Tanjung Sepatui kembali dipimpin oleh Bapak Katung Belu yang mengatur dan memimpin desa tersebut. Pada tahun 1971–1988 Tanjung Sepatui kembali dipimpin oleh Bapak Radang Sabi selama 5 tahun. Pada tahun 1989–2000 Tanjung Sepatui dipimpin oleh Musa Bau yang perkembangan penduduknya semakin banyak dan berkembang dengan mayoritas agama Kristen Protestan. Pada tahun 2001–2005 Tanjung Sepatui dipimpin oleh Bapak Litun Pangeran.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3 text-blue-900">Visi & Misi</h2>
          <div className="max-w-4xl">
            <div>
              <h3 className="font-semibold text-lg">"Membangun Desa Bersama Warga"</h3>
              <p className="text-justify leading-relaxed">
                Membangun desa bersama warga mengisyaratkan bahwa keberadaan seseorang kepala desa adalah sebagai pelayan masyarakat, artinya bahwa masyarakat diberi kebebasan dalam membangun diri sendiri, keluarga, bersama warga masyarakat lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
