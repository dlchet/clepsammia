import { NextPage } from "next";

const Home: NextPage<{}> = (_) => {
  return (
    <div className="border border-red-500 border-4 p-3 flex lg:flex-row flex-col h-screen dark:bg-slate-900 dark:text-white">
      <div className="flex-col border-red-500 border-2">
        <div className="hidden">cant see me</div>
        <div className="hidden xsm:block sm:hidden">xsmall breakpoint</div>
        <div className="hidden sm:block md:hidden">small breakpoint</div>
        <div className="hidden md:block lg:hidden">medium breakpoint</div>
        <div className="hidden lg:block xl:hidden">large breakpoint</div>
        <div className="hidden xl:block 2xl:hidden">xlarge breakpoint</div>
        <div className="hidden 2xl:block">2xlarge breakpoint</div>
        <div className="block">always see me</div>
      </div>
      <div className="flex-col">
        <div className="border border-blue-900 border-2 p-3 m-3 dark:border-yellow-900">
          <h1 className="underline text-4xl fond-bold">hello</h1>
        </div>
        <div className="pt-8 border-black border dark:border-white">
          hello world again
        </div>
      </div>
    </div>
  );
};

export default Home;
