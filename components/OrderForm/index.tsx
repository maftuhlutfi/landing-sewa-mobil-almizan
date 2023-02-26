import { armadaType } from "@/ts/types/armadaType";
import dayjs from "dayjs";
import "dayjs/locale/id";
import React from "react";
import Button from "../Button";

type Props = {
  listMobil: armadaType[];
};

const OrderForm = ({ listMobil }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const nama = formData.get("nama");
    const mobil = formData.get("mobil");
    const alamatJemput = formData.get("alamat-jemput");
    const tanggalJemput = formData.get("tanggal-jemput");
    const waktuJemput = formData.get("waktu-jemput");
    const alamatDropOff = formData.get("alamat-dropoff");
    const tanggalDropOff = formData.get("tanggal-dropoff");
    const waktuDropOff = formData.get("waktu-dropoff");

    const formatedTanggalJemput = dayjs(tanggalJemput as string)
      .locale("id")
      .format("dddd D MMMM YYYY");

    const formatedTanggalDropOff = dayjs(tanggalDropOff as string)
      .locale("id")
      .format("dddd D MMMM YYYY");

    const message = `Halo admin, saya ingin memesan mobil dengan detail sebagai berikut:\n\nNama: ${nama}\nMobil: ${mobil}\nAlamat Penjemputan: ${alamatJemput}\nTanggal Jemput: ${formatedTanggalJemput}\nWaktu Jemput: ${waktuJemput}\nLokasi Drop Off: ${alamatDropOff}\nTanggal Drop Off: ${formatedTanggalDropOff}\nWaktu Drop Off: ${waktuDropOff}`;

    const url = `https://api.whatsapp.com/send?phone=6281315716345&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white w-[90%] lg:w-[480px] text-xs custom-shadow grid gap-5"
    >
      <div className="flex flex-col w-full">
        <label htmlFor="nama" className="mb-2 font-semibold">
          Nama
        </label>
        <input
          required
          id="nama"
          name="nama"
          className="px-2 py-3 border border-blue-300"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="mobil" className="mb-2 font-semibold">
          Pilih Mobil
        </label>
        <select
          id="mobil"
          name="mobil"
          className="px-2 py-3 border border-blue-300"
        >
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
          name="alamat-jemput"
          className="h-20 px-2 py-3 border border-blue-300"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <label htmlFor="tanggal-jemput" className="mb-2 font-semibold">
            Tanggal Jemput
          </label>
          <input
            required
            id="tanggal-jemput"
            name="tanggal-jemput"
            type="date"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="waktu-jemput" className="mb-2 font-semibold">
            Waktu Jemput
          </label>
          <input
            required
            id="waktu-jemput"
            name="waktu-jemput"
            type="time"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="alamat-dropoff" className="mb-2 font-semibold">
          Lokasi Drop Off
        </label>
        <textarea
          id="alamat-dropoff"
          name="alamat-dropoff"
          className="h-20 px-2 py-3 border border-blue-300"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <label htmlFor="tanggal-dropoff" className="mb-2 font-semibold">
            Tanggal Drop Off
          </label>
          <input
            required
            id="tanggal-dropoff"
            name="tanggal-dropoff"
            type="date"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="waktu-dropoff" className="mb-2 font-semibold">
            Waktu Drop Off
          </label>
          <input
            required
            id="waktu-dropoff"
            name="waktu-dropoff"
            type="time"
            className="px-2 py-3 border border-blue-300"
          />
        </div>
      </div>
      <Button type="submit" size="small">
        Pesan Sekarang!
      </Button>
    </form>
  );
};

export default OrderForm;
