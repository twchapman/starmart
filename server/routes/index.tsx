import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Searchbar from "../islands/Searchbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>MerchEX</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <div>
        <img
          src="/logo.svg"
          height="64"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </div>
      <div>
        <Searchbar />
      </div>
    </>
  );
}
