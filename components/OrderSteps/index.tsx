import React from "react";

type Props = {};

const OrderSteps = (props: Props) => {
  return (
    <div>
      <div className="flex max-w-[400px]">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mb-6 mr-6 font-bold text-white bg-blue-700 rounded-full">
          1
        </div>
        <p className="text-gray-700">
          Isi form berikut sesuai dengan kebutuhan mobil dan detail waktu
        </p>
      </div>
      <div className="flex max-w-sm">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mb-6 mr-6 font-bold text-white bg-blue-700 rounded-full">
          2
        </div>
        <p className="text-gray-700">
          Kamu akan dialihkan ke Whatsapp untuk pemesanan.
        </p>
      </div>
      <div className="flex max-w-sm">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-6 font-bold text-white bg-blue-700 rounded-full mb-9">
          3
        </div>
        <p className="text-gray-700">
          Silahkan tunggu beberapa saat sampai admin kami membalas.
        </p>
      </div>
    </div>
  );
};

export default OrderSteps;
