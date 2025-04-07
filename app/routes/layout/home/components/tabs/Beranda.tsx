import { ConfigsLanguange } from "~/lib/config";

export default function BerandaTabs() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-none sm:leading-tight">
          {ConfigsLanguange.app_name} <br />
          <p className="text-[8px] lg:text-[10px] font-light text-center">{ConfigsLanguange.app_full_name}</p>
        </h1>

        <div className="text-gray-700 text-sm lg:text-base leading-relaxed">
          <p className="font-medium">{ConfigsLanguange.home_text}</p>
          <p className="mt-2">{ConfigsLanguange.home_text_secondary}</p>
        </div>
      </div>
    </div>
  );
}