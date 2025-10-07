import Image from "next/image";

const logos: string[] = [
  "/images/logosSection/1.png",
  "/images/logosSection/2.png",
  "/images/logosSection/3.png",
  "/images/logosSection/4.png",
  "/images/logosSection/5.png",
];
const LogosSection = () => {
  return (
    <section className="py-20 flex items-center justify-between w-full">
      {logos.map((logo) => (
        <Image
          key={logo}
          src={logo}
          alt={`company logo ${logo}`}
          width={196}
          height={33}
        />
      ))}
    </section>
  );
};

export default LogosSection;
