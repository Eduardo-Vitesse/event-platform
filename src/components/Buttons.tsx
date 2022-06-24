import { DiscordLogo, Lightning } from "phosphor-react";

interface IButtons {
  variant: "primary" | "secondary";
  link: string;
  label: string;
}

export function Buttons({ variant, link, label }: IButtons) {
  return (
    <a
      href={link}
      className={
        variant === "primary"
          ? "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
          : "p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
      }
    >
      {variant === "primary" ? (
        <DiscordLogo size={24} />
      ) : (
        <Lightning size={24} />
      )}
      {label}
    </a>
  );
}
