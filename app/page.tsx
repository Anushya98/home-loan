import Head from "next/head";
import Login from "./login/page";


export default function Home() {
  return (
    <>
      <Head>
        <title>Loan Calculator in Next JS</title>
        <meta name="description" content="Loan Calculator in Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Rest of your component */}

      <main >
        <Login />
      
      </main>
    </>
  );
}