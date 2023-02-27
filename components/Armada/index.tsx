import { armadaType } from "@/ts/types/armadaType";
import React from "react";
import ArmadaItem from "./ArmadaItem";

type Props = {
  armadaList: armadaType[];
};

const Armada = ({ armadaList }: Props) => {
  return (
    <div className="grid w-[90%] max-w-[1280px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {armadaList.map((armada, index) => (
        <ArmadaItem key={index} index={index} {...armada} />
      ))}
    </div>
  );
};

export default Armada;
