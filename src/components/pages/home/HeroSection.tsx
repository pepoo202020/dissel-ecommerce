import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex items-start justify-start w-full h-full gap-5">
      <div className="w-1/3 h-full bg-[#E0E0E0] flex items-center justify-center rounded-xl overflow-hidden relative">
        <Image
          src="/images/heroSection/image-1.png"
          alt="hero-image-1"
          className="absolute bottom-0"
          width={392}
          height={570}
        />
      </div>
      <div className="w-1/3 h-full flex flex-col items-center justify-between">
        <div className="w-full h-36 bg-[#E0E0E0] rounded-lg overflow-hidden relative">
          <Image
            src="/images/heroSection/image-3.png"
            alt="hero-image-3"
            className="absolute bottom-0"
            width={399}
            height={145}
          />
        </div>
        <div className="w-full h-80 flex flex-col items-center justify-start ">
          <h1 className="uppercase text-7xl font-medium tracking-widest text-[#484848]">
            ultimate
          </h1>
          <h1 className="uppercase text-9xl font-medium tracking-widest text-transparent [-webkit-text-stroke:1px_#000] py-2">
            sale
          </h1>
          <h5 className="uppercase text-xl text-[#484848] font-mono tracking-wide pb-5">
            new collection
          </h5>
          <Button
            variant="default"
            className="cursor-pointer uppercase px-16 py-5"
          >
            shop now
          </Button>
        </div>
        <div className="w-full h-36 bg-[#E0E0E0] rounded-lg overflow-hidden relative">
          <Image
            src="/images/heroSection/image-4.png"
            alt="hero-image-4"
            fill
            sizes="(min-width: 1024px) 426px, 100vw"
            className="object-cover [object-position:center_30%]"
          />
        </div>
      </div>
      <div className="w-1/3 h-full bg-[#E0E0E0] flex items-center justify-center rounded-xl overflow-hidden relative">
        <Image
          src="/images/heroSection/image-2.png"
          alt="hero-image-2"
          className="absolute bottom-0"
          width={249}
          height={568}
        />
      </div>
    </section>
  );
};

export default HeroSection;
