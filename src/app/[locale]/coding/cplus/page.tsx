import dynamic from "next/dynamic";

const Cplus = dynamic(() => import("@/components/Ui/Coding/Cplus"));

import Head from "next/head";

const CPlusCoding = () => {
  return (
    <>
      <Head>
        <title>Araby AI | C++</title>
        <meta name="description" content="Unlock the Power of Low-Level Computing with Araby AI’s Comprehensive C++ Programming Tools" />
      </Head>
      <Cplus />
    </>
  );
};

export default CPlusCoding;
