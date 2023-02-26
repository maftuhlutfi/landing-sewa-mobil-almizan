import Armada from "@/components/Armada";
import Button from "@/components/Button";
import OrderForm from "@/components/OrderForm";
import OrderSteps from "@/components/OrderSteps";
import ServiceItems from "@/components/ServiceItems";
import MainLayout from "@/layout/MainLayout";
import { armadaType } from "@/ts/types/armadaType";
import Head from "next/head";
import Image from "next/image";

export default function Home({ dataMobil }: { dataMobil: armadaType[] }) {
  return (
    <>
      <Head>
        <title>Al Mizan: Sewa Mobil Magelang Jogja</title>
        <meta name="title" content="Al Mizan: Sewa Mobil Magelang Jogja" />
        <meta
          name="description"
          content="Al Mizan adalah penyedia jasa sewa mobil di Magelang dan Jogja. Kami menyediakan berbagai jenis mobil yang siap memenuhi kebutuhan transportasi Anda, dengan harga yang terjangkau, terpercaya, dan layanan yang ramah."
        />
        <meta
          name="keywords"
          content="Al Mizan, Sewa Mobil, Magelang, Jogja, Transportasi, Harga Terjangkau"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.sewamobilmagelangjogja.com/"
        />
        <meta
          property="og:title"
          content="Al Mizan: Sewa Mobil Magelang Jogja"
        />
        <meta
          property="og:description"
          content="Al Mizan adalah penyedia jasa sewa mobil di Magelang dan Jogja. Kami menyediakan berbagai jenis mobil yang siap memenuhi kebutuhan transportasi Anda, dengan harga yang terjangkau, terpercaya, dan layanan yang ramah."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/h7JnzYb/meta-image.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.sewamobilmagelangjogja.com/"
        />
        <meta
          property="twitter:title"
          content="Al Mizan: Sewa Mobil Magelang Jogja"
        />
        <meta
          property="twitter:description"
          content="Al Mizan adalah penyedia jasa sewa mobil di Magelang dan Jogja. Kami menyediakan berbagai jenis mobil yang siap memenuhi kebutuhan transportasi Anda, dengan harga yang terjangkau, terpercaya, dan layanan yang ramah."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/h7JnzYb/meta-image.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section
          className="bg-center bg-no-repeat bg-cover px-4 md:px-10 lg:px-20 pt-[200px] pb-32 lg:pb-[160px] text-center flex flex-col items-center"
          style={{ backgroundImage: `url(/bg-pattern.svg)` }}
        >
          <h1 className="font-bold text-4xl md:text-[40px] leading-[56px] max-w-[1000px]">
            Jadikan Perjalananmu Lebih Nyaman dengan{" "}
            <span className="font-extrabold text-blue-600">#1</span> Sewa Mobil
            Magelang Jogja Terpercaya
          </h1>
          <p className="max-w-3xl my-5 leading-6 text-gray-700">
            Rasakan kenyamanan dan keamanan dalam perjalananmu dengan menyewa
            mobil terpercaya di Magelang dan Jogja. Tersedia berbagai jenis
            mobil dengan harga terjangkau. Pesan sekarang dan nikmati pengalaman
            berkendara yang tak terlupakan!
          </p>
          <Button className="px-8 mt-2 mb-12">Yuk Pesan!</Button>
        </section>
        <div className="hidden lg:block">
          <Image
            src="/hero-image.webp"
            width={1280}
            height={340}
            className="absolute transform -translate-x-1/2 -mt-36 inset-x-1/2"
            alt="hero-image"
          />
        </div>
        <div className="relative -mt-32 w-[720px] max-w-full sm:w-full h-40 sm:h-80 -translate-x-1/2 inset-x-1/2 block lg:hidden">
          <Image
            src="/hero-image-small.webp"
            fill
            alt="hero-image"
            className="object-cover "
          />
        </div>
        <section className="flex justify-center px-4 pt-48 pb-20 -mt-20 sm:-mt-28 lg:mt-0 lg:px-20 md:px-10 bg-linear-blue-dark lg:pt-60">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="mb-20 lg:mb-0 lg:mr-20 w-[90%] lg:max-w-[480px]">
              <h1 className="mb-5 text-4xl font-bold leading-[50px] text-white">
                Kunjungi Tiap Sudut Magelang dan Jogja dengan Menyenangkan!
              </h1>
              <p className="text-sm leading-6 text-gray-300">
                Kami menyediakan armada mobil yang terawat dan selalu siap untuk
                menjemputmu di Magelang dan Jogja. Kami memiliki berbagai jenis
                mobil, mulai dari city car hingga mobil keluarga, yang siap
                mengantar perjalananmu dengan aman dan nyaman.
              </p>
            </div>
            <Image
              src="/yogya-mgl-photos.webp"
              width={538}
              height={449}
              alt="yogya-mgl-photos"
            />
          </div>
        </section>
        <section className="flex flex-col items-center px-4 py-20 bg-blue-600 md:px-10 lg:px-20">
          <h1 className="text-4xl font-bold leading-[50px] text-white w-[90%] max-w-xl mb-12 text-center">
            Kami Siap Melayani untuk Perjalanan yang Terbaik!
          </h1>
          <ServiceItems />
          <Button className="mt-12" size="xl" variant="secondary">
            Pesan Sekarang dan Nikmati Perjalanan Nyaman!
          </Button>
        </section>
        <section className="flex md:px-10 px-4 flex-col items-center lg:px-20 py-20 bg-[#F3F7F9]">
          <h1 className="text-4xl font-bold leading-[50px] mb-2 text-center">
            Armada Kami
          </h1>
          <p className="mb-10 text-sm leading-6 text-gray-700 max-w-[620px] text-center">
            Kami menyediakan armada mobil yang terawat dan beragam jenis untuk
            mengantar perjalananmu dengan aman dan nyaman di Magelang dan Jogja.
          </p>
          <Armada armadaList={dataMobil} />
        </section>
        <section className="flex flex-col items-center px-4 py-20 md:px-10 lg:px-20">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-[90%] md:max-w-[800px] lg:max-w-[520px] mb-24 lg:mr-24">
              <h1 className="text-4xl font-bold leading-[50px] mb-9">
                Yuk, pesan mobil dengan beberapa langkah mudah!
              </h1>
              <OrderSteps />
              <p className="font-semibold">
                Jika form ini tidak cocok untuk kebutuhanmu, langsung saja
                hubungi melalui{" "}
                <a href="#" className="font-bold text-green-500 underline">
                  Whatsapp Kami
                </a>
              </p>
            </div>
            <OrderForm />
          </div>
        </section>
        <section className="flex flex-col items-center px-4 py-20 bg-blue-600 md:px-10 lg:px-20">
          <h1 className="text-4xl font-bold leading-[50px] text-white max-w-[960px] mb-8 text-center">
            “Kami hadir untuk memberikan solusi terbaik dalam perjalananmu,
            karena kepuasan pelanggan adalah prioritas utama kami.”
          </h1>
          <h5 className="text-xl font-medium text-center text-gray-300">
            Tim Sewa Mobil Magelang Jogja Al Mizan
          </h5>
        </section>
      </MainLayout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.sheety.co/f27cc94bba1d6eea26802f8d6c63eaeb/alMizan/dataMobil"
  );
  const data = await res.json();
  const { dataMobil }: { dataMobil: armadaType[] } = data;
  console.log(dataMobil);

  return {
    props: {
      dataMobil: dataMobil,
    },
  };
}
