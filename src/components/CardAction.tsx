import { CaretRight, FileArrowDown, Image } from "phosphor-react";

interface ICardAction {
  link: string;
  title: string;
  description: string;
  type: "material" | "wallpaper";
}

export default function CardAction({
  link,
  title,
  description,
  type,
}: ICardAction) {
  return (
    <a
      href={link}
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        {type === "material" ? (
          <FileArrowDown size={40} />
        ) : (
          <Image size={40} />
        )}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className=" text-sm text-gray-200 mt-2">{description}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
