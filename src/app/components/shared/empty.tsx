import { FC } from "react";

type Props = {
  Icon?: FC;
  text: string;
};

export default function Empty({ Icon, text }: Props) {
  return (
    <div className="flex flex-col md:gap-10 justify-center items-center">
      {Icon && (
        <span className="max-md:[&_svg]:max-w-[80%] [&_svg]:mx-auto">
          <Icon />
        </span>
      )}
      <p className="text-light-red text-lg lg:text-xl leading-5 -tracking-[0.4px] text-center">
        {text}
      </p>
    </div>
  );
}
