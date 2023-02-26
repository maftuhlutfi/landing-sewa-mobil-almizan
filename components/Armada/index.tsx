import { armadaType } from "@/ts/types/armadaType";
import React from "react";
import ArmadaItem from "./ArmadaItem";

type Props = {};

const armadaList: armadaType[] = [
  {
    name: "Toyota Avanza",
    capacity: "5",
    pricehalf: "650.000",
    priceday: "750.000",
    image: "/armada-1.webp",
  },
  {
    name: "Toyota Avanza",
    capacity: "5",
    pricehalf: "650.000",
    priceday: "750.000",
    image: "/armada-1.webp",
  },
  {
    name: "Toyota Avanza",
    capacity: "5",
    pricehalf: "650.000",
    priceday: "750.000",
    image: "/armada-1.webp",
  },
];

const Armada = (props: Props) => {
  return (
    <div className="grid w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {armadaList.map((armada, index) => (
        <ArmadaItem key={index} {...armada} />
      ))}
    </div>
  );
};

export default Armada;
