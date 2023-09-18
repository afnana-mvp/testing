import Link from "next/link";
import { FC } from "react";

interface notFoundProps {}

const notFound: FC<notFoundProps> = ({}) => {
  return (
    <div>
      not-found
      <Link href="/">
        <a>Go home</a>
      </Link>
    </div>
  );
};

export default notFound;
