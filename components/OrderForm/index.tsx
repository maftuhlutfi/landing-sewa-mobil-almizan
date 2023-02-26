import React from "react";
import Button from "../Button";

type Props = {};

const OrderForm = (props: Props) => {
  return (
    <form className="p-8 bg-white w-[90%] lg:w-[480px] text-xs custom-shadow grid gap-5">
      <div className="flex flex-col w-full">
        <label className="mb-2 font-semibold">Nama</label>
        <input className="px-4 py-3 border border-blue-300" />
      </div>
      <div className="flex flex-col w-full">
        <label className="mb-2 font-semibold">Nomor HP/Whatsapp</label>
        <input className="px-4 py-3 border border-blue-300" />
      </div>
      <div className="flex flex-col w-full">
        <label className="mb-2 font-semibold">Alamat Penjemputan</label>
        <input className="px-4 py-3 border border-blue-300" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <label className="mb-2 font-semibold">Tanggal Jemput</label>
          <input className="px-4 py-3 border border-blue-300" />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 font-semibold">Waktu Jemput</label>
          <input className="px-4 py-3 border border-blue-300" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className="mb-2 font-semibold">Lokasi Drop Off</label>
        <input className="px-4 py-3 border border-blue-300" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <label className="mb-2 font-semibold">Tanggal Drop Off</label>
          <input className="px-4 py-3 border border-blue-300" />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 font-semibold">Waktu Drop Off</label>
          <input className="px-4 py-3 border border-blue-300" />
        </div>
      </div>
      <Button size="small">Pesan Sekarang!</Button>
    </form>
  );
};

export default OrderForm;
