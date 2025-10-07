"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Volkhov } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  { name: "Home", link: "/" },
  { name: "Deals", link: "/deals" },
  { name: "New Arrivals", link: "/new-arrivals" },
  { name: "Packages", link: "/packages" },
];

const MainHeader = () => {
  const pathname = usePathname();
  return (
    <header className="h-20 w-full flex items-center justify-between mb-5 mt-2">
      {/* logo */}
      <div
        className={cn(
          VolkhovFont.className,
          "uppercase text-5xl text-[#484848]"
        )}
      >
        dissel
      </div>

      {/* links & button */}
      <div className="flex items-center justify-end gap-14">
        {links.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className={cn(
              link.link === pathname && "font-bold",
              "text-[#484848] text-base"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link href={"/auth"} className="text-[#484848] text-base">
          sign in
        </Link>
        <Button
          variant="default"
          size="sm"
          className="cursor-pointer capitalize p-5"
        >
          sign up
        </Button>
      </div>
    </header>
  );
};

export default MainHeader;
