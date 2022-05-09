import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Link from "next/link";

const MainSetting = () => {
  return (
    <div className="relative w-[342px] h-[115px] bg-[#ffffff] rounded-[20px] mt-5 border-solid border-[1px] border-[#222]">
      <div className="">
        <h1 className="left-[15px] top-[35px] absolute whitespace-pre-wrap text-[#111111] text-[20px] leading-[1px] tracking-[-1px]">
          Name
        </h1>
        <input
          placeholder="Write the name"
          className="text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[180px] h-[30px] absolute left-[140px] top-[20px] rounded-[10px]"
        />
      </div>
      <div className="">
        <h1 className="left-[15px] top-[80px] absolute whitespace-pre-wrap text-[#111111] text-[20px] leading-[1px] tracking-[-1px]">
          Description
        </h1>
        <input
          placeholder="Write the description"
          className="text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[180px] h-[30px] absolute left-[140px] top-[65px] rounded-[10px] text-left"
        />
      </div>
    </div>
  );
};

const CreateVocabulary: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>MoonJunSik</title>
        <meta name="description" content="Made by AIDEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-black flex items-center flex-col">
        <div className="w-[390px] h-full bg-white pt-[56px] px-[24px] pb-[24px] overflow-scroll">
          <h1 className="text-[40px] text-[#111111] tracking-[-1px] leading-[40px] whitespace-pre-wrap text-left">
            Create
            <br />
            Vocabulary
          </h1>

          <MainSetting />
          <div className="w-[342px] h-[43px] mt-8 rounded-[20px] border-solid border-[1px] border-[#222] flex justify-center items-center">
            <h1 className="whitespace-pre text-[#111111] leading-[1px] tracking-[-1px]">
              Add
            </h1>
          </div>
        </div>
      </main>

      <footer className=" static flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default CreateVocabulary;
