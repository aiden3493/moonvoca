import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Link from "next/link";

const Home: NextPage = () => {
  const Voca = [
    { name: "Name", description: "first vocabulary", words: 20 },
    { name: "Name", description: "first vocabulary", words: 20 },
    { name: "Name", description: "first vocabulary", words: 20 },
    { name: "Name", description: "first vocabulary", words: 20 },
  ];

  return (
    <div className="w-full h-screen">
      <Head>
        <title>MoonJunSik</title>
        <meta name="description" content="Made by AIDEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-black flex items-center flex-col">
        <div className="w-[390px] h-full bg-white pt-[56px] px-[24px] pb-[24px]">
          <h1 className="text-[40px] text-[#111111] tracking-[-1px] leading-[40px] whitespace-pre-wrap text-left">
            Moon
            <br />
            JunSik
          </h1>
          <div className="w-[342px] h-[84px] bg-[#99eeff] rounded-[10px] mt-5 flex justify-center items-center">
            <h1 className=" whitespace-pre text-[#ffffff] text-[24px] leading-[1px] tracking-[-1px]">
              Add
            </h1>
          </div>

          {Voca.map((voca, index) => (
            <div
              key={index}
              className=" relative w-full h-[140px] bg-[#44ccff] mt-2 rounded-[10px]"
            >
              <div className="absolute left-4 top-[1.65rem] w-[289px] h-[87px] text-[24px] tracking-[1px] leading-[25px] text-[#ffffff] whitespace-pre-wrap">
                <h1>{voca.name}</h1>
                <h1>{voca.description}</h1>
                <h1>{`${voca.words} words`}</h1>
              </div>

              <div className="flex justify-center items-center w-[33px] h-[33px] absolute bg-[#ffffff] left-[295px] top-[13px] rounded-[10px]"></div>

              <div className="flex justify-center items-center w-[92px] h-[33px] absolute bg-[#ffffff] left-[235px] top-[95px] rounded-[10px]">
                <h1 className="text-[#44ccff] text-[18px] mt-1">Learn</h1>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
