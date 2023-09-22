import Head from "next/head";
import dynamic from "next/dynamic";

const C = dynamic(() => import("@/components/Ui/Coding/C"));

const CCoding = () => {
  return (
    <>
      <Head>
        <title>Araby AI | C</title>
        <meta name="description" content="Unlock the Power of Low-Level Computing with Araby AI’s Comprehensive C Programming Tools" />
      </Head>
      <C />
    </>
  );
};

export default CCoding;
