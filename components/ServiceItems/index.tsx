import Image from "next/image";
import React from "react";

type Props = {};

const services = [
  {
    icon: "nice car.svg",
    title: "Armada Terawat, Nyaman, dan Aman",
  },
  {
    icon: "cheap.svg",
    title: "Harga Terjangkau dan Sesuai",
  },
  {
    icon: "fast response.svg",
    title: "Respon Cepat Pelanggan 24 Jam",
  },
  {
    icon: "pickup.svg",
    title: "Layanan Antar Jemput Objek Wisata ",
  },
  {
    icon: "driver.svg",
    title: "Driver Professional dan Berpengalaman",
  },
  {
    icon: "satisfaction.svg",
    title: "100% Garansi Kepuasan Pelanggan",
  },
];

const ServiceItems = (props: Props) => {
  return (
    <div className="grid w-[90%] max-w-[940px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map(({ icon, title }) => (
        <div className="flex items-center p-4 bg-white " key={icon}>
          <Image
            src={`/service-icons/${icon}`}
            alt={icon.replace(".svg", "")}
            width={40}
            height={40}
          />
          <p className="ml-4 font-medium">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceItems;
