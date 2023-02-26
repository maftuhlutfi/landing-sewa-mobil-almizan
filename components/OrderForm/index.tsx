import { armadaType } from "@/ts/types/armadaType";
import React from "react";
import Button from "../Button";

type Props = {
  listMobil: armadaType[];
};

const OrderForm = ({ listMobil }: Props) => {
  return (
    <form className="p-8 bg-white w-[90%] lg:w-[480px] text-xs custom-shadow grid gap-5">
      <div className="flex flex-col w-full">
        <label htmlFor="nama" className="mb-2 font-semibold">
          Nama
        </label>
        <input id="nama" className="px-2 py-3 border border-blue-300" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="mobil" className="mb-2 font-semibold">
          Pilih Mobil
        </label>
        <select id="mobil" className="px-2 py-3 border border-blue-300">
          {listMobil.map((mobil, index) => (
            <option key={index} value={mobil.name}>
              {mobil.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="alamat-jemput" className="mb-2 font-semibold">
          Alamat Penjemputan
        </label>
        <textarea
          id="alamat-jemput"
          className="h-20 px-2 py-3 border border-blue-300"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <label htmlFor="tanggal-jemput" className="mb-2 font-semibold">
            Tanggal Jemput
          </label>
          <input
            id="tanggal-jemput"
            type="date"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="waktu-jemput" className="mb-2 font-semibold">
            Waktu Jemput
          </label>
          <input
            id="waktu-jemput"
            type="time"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="alamat-jemput" className="mb-2 font-semibold">
          Lokasi Drop Off
        </label>
        <textarea
          id="alamat-jemput"
          className="h-20 px-2 py-3 border border-blue-300"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <label htmlFor="tanggal-jemput" className="mb-2 font-semibold">
            Tanggal Drop Off
          </label>
          <input
            id="tanggal-jemput"
            type="date"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="waktu-jemput" className="mb-2 font-semibold">
            Waktu Drop Off
          </label>
          <input
            id="waktu-jemput"
            type="time"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
      </div>
      <Button size="small">Pesan Sekarang!</Button>
    </form>
  );
};

export default OrderForm;
