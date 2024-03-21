import React from "react";

type Treatment = {
  id: number;
  name: string;
  shortDesc: string;
  price: number;
  duration: string;
  thumbnailImage: string;
};

const treatments = [
  {
    id: 1,
    name: "Deep Cleansing Facial",
    shortDesc:
      "Revitalize your skin with a deep cleansing facial, removing impurities and leaving your skin feeling refreshed and rejuvenated.",
    price: 50,
    duration: "60 minutes",
    thumbnailImage: "deep_cleansing_facial.jpg",
  },
  {
    id: 2,
    name: "Swedish Massage",
    shortDesc:
      "Relax and unwind with a Swedish massage, promoting circulation and easing tension in your muscles for a sense of ultimate relaxation.",
    price: 60,
    duration: "60 minutes",
    thumbnailImage: "swedish_massage.jpg",
  },
  {
    id: 3,
    name: "Manicure & Pedicure",
    shortDesc:
      "Treat your hands and feet to a luxurious manicure and pedicure, leaving your nails perfectly polished and your skin soft and moisturized.",
    price: 40,
    duration: "90 minutes",
    thumbnailImage: "manicure_pedicure.jpg",
  },
  {
    id: 4,
    name: "Hair Styling",
    shortDesc:
      "Transform your look with our professional hair styling services, whether you're looking for a sleek blowout or a glamorous updo.",
    price: 35,
    duration: "45 minutes",
    thumbnailImage: "hair_styling.jpg",
  },
  {
    id: 5,
    name: "Eyebrow Shaping",
    shortDesc:
      "Enhance your natural beauty with expert eyebrow shaping, framing your face and accentuating your eyes for a polished look.",
    price: 20,
    duration: "30 minutes",
    thumbnailImage: "eyebrow_shaping.jpg",
  },
];

export default function Cards() {
  return (
    <div className="flex flex-col gap-8 mr-4">
      {treatments?.map((treatment: Treatment) => (
        <div className="flex" key={treatment.id}>
          <div className="flex-1 tracking-[-0.33] flex flex-col gap-[6px]">
            <span className="font-semibold text-base">{treatment.name}</span>
            <span className="text-sm leading-[18px] text-[#7A7A7A]">
              {treatment.shortDesc}
            </span>
            <div className="font-medium text-sm leading-[18px]">
              <span>{treatment.price}€</span> •{" "}
              <span>{treatment.duration} min</span>
            </div>
          </div>
          <div className="my-auto">
            <div className="w-[75px] h-[75px] rounded-[4px] bg-[#F6F6F6] ml-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
