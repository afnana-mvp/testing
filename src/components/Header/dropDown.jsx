import Link from "next/link";
import { ChevronDown } from "lucide-react";

const DropDown = ({ data }) => {
  return (
    <ul className=" bg-white/50 text-start rounded-box w-40 rounded-md">
      {data.map(({ name, path, drop, icons }, index) => (
        <li key={index} className="relative flex items-center justify-between px-4 py-2">
          <Link href={path}>{name}</Link>
          <ChevronDown className="w-5" />
          <div className="absolute top-0 left-44">
            {drop ? (
              <>
                <ul className="bg-white/50 text-start rounded-box w-40 rounded-md">
                  {drop.map(({ name, path }, index) => (
                    <li key={index} className="relative flex items-center justify-between px-4 py-2">
                      <Link href={path}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
