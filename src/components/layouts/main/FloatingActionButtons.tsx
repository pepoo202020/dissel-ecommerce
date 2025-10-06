import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-5 end-5 flex items-center justify-end gap-9">
      <Button
        variant="default"
        className="cursor-pointer border  border-black rounded-full w-14 h-14"
      >
        <FaShoppingCart />
      </Button>
      <Button
        variant="ghost"
        className="cursor-pointer border bg-white text-black border-black rounded-full w-14 h-14"
      >
        <FaArrowUpLong />
      </Button>
    </div>
  );
};

export default FloatingActionButtons;
