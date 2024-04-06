import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

type CategoryButtonProps = {
  imageSrc: string;
  imageAlt: string;
  text: string;
};

export default function CategoryButton({
  imageAlt,
  imageSrc,
  text,
}: CategoryButtonProps) {
  return (
    <button className="border w-full flex-1 justify-between text-primary-500 flex px-4 py-2 gap-8 items-center rounded-[5px]">
      <div className="flex items-center  gap-3">
        <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
          <Image src={imageSrc} width={21} height={21} alt={imageAlt} />
        </div>
        <div className="text-base text-inherit">{text}</div>
      </div>

      <GoArrowRight />
    </button>
  );
}
