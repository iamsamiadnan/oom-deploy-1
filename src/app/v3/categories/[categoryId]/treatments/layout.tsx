import { Image } from "antd";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <div className="mb-[10px]">
        <img src="https://placehold.co/393x207" />
      </div>
      <div>
        <h1 className="font-semibold text-2xl leading-[29.05px] tracking-[-0.33px]">
          Excelsior Gallia
        </h1>
        <div className="mt-[6px] flex gap-1">
          <Image src="/Icons/MapPin.svg" width="16" height="16" alt="" />

          <span className="text-[15px] leading-[18.15px] tracking-[-0.33px] text-[#737373]">
            Piazza Duca d'Aosta, 9, 20124 Milano MI, Italie
          </span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
