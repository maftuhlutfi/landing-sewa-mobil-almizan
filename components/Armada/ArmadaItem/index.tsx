import Button from "@/components/Button";
import { armadaType } from "@/ts/types/armadaType";
import formatRupiah from "@/utils/formatRupiah";
import Image from "next/image";
import React from "react";

const ArmadaItem = ({
  name,
  capacity,
  priceDay,
  priceHalf,
  image,
  includeBbm,
  index,
}: armadaType & { index: number }) => {
  const handleClick = () => {
    document.getElementById("pesan")?.scrollIntoView();
    (document.querySelector("select#mobil") as HTMLInputElement).value = name;
  };

  return (
    <div
      className="flex flex-col p-5 bg-white "
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="relative mb-5">
        <Image
          src="/armada-bg.webp"
          width={360 * 1.2}
          height={250 * 1.2}
          alt={`image-${name}-bg`}
          className="relative object-contain object-center mx-auto"
        />
        <Image
          src={image}
          width={360 * 0.8}
          height={250 * 0.8}
          alt={`image-${name}`}
          className="absolute object-contain object-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-[60%]"
        />
        <Image
          src="/logo-al-mizan.svg"
          width={170 * 0.5}
          height={80 * 0.5}
          alt="logo-al-mizan"
          className="absolute top-3 right-3"
        />
      </div>
      <h4 className="mb-2 text-2xl font-semibold">{name}</h4>
      <p className="text-sm font-medium text-gray-700">
        Kapasitas {capacity} penumpang
      </p>
      <div className="w-full h-px my-4 bg-gray-300" />
      <div className="flex items-start justify-between">
        <div className="text-sm">
          <p className="text-gray-700 mb-1.5 font-semibold">Tarif Mulai</p>
          <p className="text-blue-600 mb-1.5 font-bold">
            {formatRupiah(priceHalf)}
          </p>
          <p className="text-gray-600 mb-1.5 text-xs italic mt-2">
            <span className="text-red-600">*</span> Include BBM, Mobil, Sopir
          </p>
          {/* <p className="text-blue-600 mb-1.5 font-semibold">
            Rp. {priceDay} (24 jam)
          </p> */}
          {/* <p className="text-gray-600 mb-1.5 text-xs italic mt-2">
            {includeBbm ? (
              <>
                <span className="text-red-600">*</span> Sudah termasuk BBM
              </>
            ) : (
              <>
                <span className="text-red-600">*</span> Belum termasuk BBM (+Rp.
                100.000)
              </>
            )}
          </p> */}
        </div>
        <Button
          size="small"
          variant="secondary"
          className="text-xs"
          onClick={handleClick}
        >
          Pesan <br />
          Sekarang
        </Button>
      </div>
    </div>
  );
};

export default ArmadaItem;
