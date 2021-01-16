import React from "react";

const makanans = [
  {
    nama: "soto",
    harga: 12000,
  },
  {
    nama: "bakso",
    harga: 13500,
  },
  {
    nama: "Ketan",
    harga: 5000,
  },
];

const Map = () => {
  return (
    <div>
      <h2>Map</h2>
      <ul>
        {makanans.map((makanan) => (
          <li>
            {makanan.nama} - Harga : {makanan.harga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
