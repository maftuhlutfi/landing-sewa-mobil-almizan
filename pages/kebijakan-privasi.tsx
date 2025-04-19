import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kebijakan Privasi - Al Mizan: Sewa Mobil Magelang Jogja</title>
        <meta
          name="description"
          content="Kebijakan Privasi untuk layanan sewa mobil di Kebijakan Privasi - Al Mizan: Sewa Mobil Magelang Jogja."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <div className="max-w-4xl px-4 py-10 mx-auto mt-24 text-gray-800">
          <h1 className="mb-6 text-3xl font-bold text-center">
            Kebijakan Privasi
          </h1>

          <section className="mb-8">
            <p>
              Selamat datang di{" "}
              <strong>
                Kebijakan Privasi - Al Mizan: Sewa Mobil Magelang Jogja
              </strong>
              ! Privasi Anda penting bagi kami. Kebijakan Privasi ini
              menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
              melindungi informasi pribadi Anda saat menggunakan layanan sewa
              mobil kami.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              1. Informasi yang Kami Kumpulkan
            </h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                Informasi Pribadi: Nama, email, nomor telepon, alamat, dll.
              </li>
              <li>
                Informasi Kendaraan: Jenis kendaraan, tanggal sewa, lokasi, dll.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              2. Cara Kami Menggunakan Informasi
            </h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Memproses pemesanan dan penyewaan kendaraan.</li>
              <li>Menghubungi pengguna terkait layanan dan konfirmasi.</li>
              <li>Meningkatkan kualitas layanan dan pengalaman pengguna.</li>
              <li>Mengirimkan promosi jika pengguna menyetujuinya.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">3. Perlindungan Data</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Enkripsi data dengan teknologi SSL.</li>
              <li>Akses terbatas hanya pada staf berwenang.</li>
              <li>Pemantauan sistem keamanan secara berkala.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">4. Berbagi Informasi</h2>
            <p>
              Kami tidak akan menjual atau membagikan informasi pribadi Anda
              tanpa izin, kecuali kepada pihak ketiga yang membantu operasional,
              atau jika diwajibkan oleh hukum.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">5. Cookie</h2>
            <p>Kami tidak menggunakan cookie.</p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">6. Hak Pengguna</h2>
            <p>
              Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
              data pribadi Anda, serta menolak penggunaan data untuk pemasaran.
              Hubungi kami untuk permintaan tersebut.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              7. Perubahan Kebijakan
            </h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
              Perubahan akan diumumkan melalui situs atau email jika diperlukan.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">8. Hubungi Kami</h2>
            <p>
              <strong>Al Mizan: Sewa Mobil Magelang Jogja</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:email@example.com"
                className="text-blue-600 underline"
              >
                marajididik34@gmail.com
              </a>
              <br />
              Whatasapp: 6281315716345
              <br />
              Alamat: Nglengkong, Seworan, Grabag, Magelang Regency, Central
              Java 56196
            </p>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

export default PrivacyPolicy;
