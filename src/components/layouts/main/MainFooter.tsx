import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Volkhov } from "next/font/google";
import Link from "next/link";

const VolkhovFont = Volkhov({
  weight: ["400"],
  display: "auto",
  style: "normal",
});

interface LinkItem {
  name: string;
  link: string;
}
const links: LinkItem[] = [
  { name: "Support Center", link: "/support-center" },
  { name: "Invoicing", link: "/invoicing" },
  { name: "Contract", link: "/contract" },
  { name: "Careers", link: "/careers" },
  { name: "Blog", link: "/blog" },
  { name: "FAQ,s", link: "/faqs" },
];

const MainFooter = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-between py-8">
        {/* logo */}
        <div
          className={cn(
            VolkhovFont.className,
            "uppercase text-3xl text-[#484848]"
          )}
        >
          dissel
        </div>

        {/* links & button */}
        <div className="flex items-center justify-end gap-9">
          {links.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              className={cn("text-[#484848] text-base")}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-xs py-5 text-[#484848]">
        Copyright © {new Date().getFullYear()} Dissel . All Rights Reseved.
      </div>
    </header>
  );
};

export default MainFooter;
