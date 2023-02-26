import Button from "@/components/Button";
import { armadaType } from "@/ts/types/armadaType";
import Image from "next/image";
import React from "react";

const ArmadaItem = ({
  name,
  capacity,
  priceday,
  pricehalf,
  image,
}: armadaType) => {
  return (
    <div className="flex flex-col p-5 bg-white ">
      <h4 className="mb-2 text-2xl font-semibold">{name}</h4>
      <p className="text-sm font-medium text-gray-700">
        Kapasitas {capacity} penumpang
      </p>
      <div className="w-full h-px my-4 bg-gray-300" />
      <div className="flex items-start justify-between mb-10">
        <div className="text-sm">
          <p className="text-gray-700 mb-1.5 font-semibold">Tarif Mulai</p>
          <p className="text-blue-600 mb-1.5 font-semibold">
            Rp. {pricehalf} (12 jam)
          </p>
          <p className="text-blue-600 mb-1.5 font-semibold">
            Rp. {priceday} (24 jam)
          </p>
        </div>
        <Button size="small" variant="secondary" className="text-xs ">
          Pesan <br />
          Sekarang
        </Button>
      </div>
      <Image
        src={image}
        width={360}
        height={250}
        alt={`image-${name}`}
        className="object-contain"
      />
    </div>
  );
};

export default ArmadaItem;
