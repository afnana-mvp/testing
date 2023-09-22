import dynamic from "next/dynamic";

const CPlusCoding = dynamic(() => import("./coding/cplus/page"), { ssr: false });

export default function Home() {
  return (
    <>
      <CPlusCoding />
    </>
  );
}
