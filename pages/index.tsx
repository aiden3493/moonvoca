import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import VocabularyBox from "../components/vocabularyBox";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  type Vocabulary = {
    name: string;
    description: string;
    wordNum: number;
    words: object;
  };

  const [Voca, setVoca] = useState<Vocabulary[]>([]);

  useEffect(() => {
    const localStorage = window.localStorage;
    const StorageData = { ...localStorage };

    let data: any = [];
    for (let key in StorageData) {
      const datas = JSON.parse(StorageData[key]);
      data = [
        ...data,
        {
          name: key,
          description: datas.VocaDescription,
          wordNum: datas.wordNum,
          words: datas.words,
        },
      ];
    }
    setVoca(data);
  }, []);

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
            Moon
            <br />
            JunSik
          </h1>

          <Link href="/createVocabulary" passHref>
            <div className="w-[342px] h-[84px] bg-[#99eeff] rounded-[10px] mt-5 flex justify-center items-center">
              <h1 className=" whitespace-pre text-[#ffffff] text-[24px] leading-[1px] tracking-[-1px]">
                Add
              </h1>
            </div>
          </Link>

          {Voca.map((voca, index) => (
            <VocabularyBox
              key={index}
              index={index}
              name={voca.name}
              description={voca.description}
              words={voca.wordNum}
            />
          ))}
        </div>
      </main>

      <footer className=" static flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
