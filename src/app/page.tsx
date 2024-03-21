"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const showCatalogue = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        router.push("/1");
        break;
      case 2:
        router.push("/2");
        break;
    }
  };

  return (
    <div className="bg-[url('/oom-home-image.png')] bg-cover bg-center h-screen relative">
      <div className="absolute bottom-[25px]">
        <div className="text-white text-center mb-[53px]">
          <h1 className="font-bold text-2xl mb-3">Beauty Room Service</h1>
          <p className="font-medium text-base px-7">
            Indulge yourself with a luxury in-room hair or beauty treatment
          </p>
        </div>
        <div className="flex flex-col gap-2 mx-[17px]">
          <button
            onClick={() => showCatalogue(1)}
            className="font-semibold text-white text-[17px] leading-[22px] h-[56px] bg-black rounded-[14px] w-full"
          >
            Women&apos;s Menu
          </button>
          <button
            onClick={() => showCatalogue(2)}
            className="font-semibold text-black text-[17px] leading-[22px] h-[56px] bg-white rounded-[14px] w-full"
          >
            Men&apos;s Menu
          </button>
        </div>
      </div>
    </div>
  );
}
