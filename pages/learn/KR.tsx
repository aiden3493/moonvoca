import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Router from "next/router";
import Footer from "../../components/footer";
import KRWordTest from "../../components/KRwordTest";

const Learn: NextPage = () => {
  const query = useRouter().query;

  type word = {
    word: string;
    description: string;
  };

  const [words, setWords] = useState<word[]>([]);

  useEffect(() => {
    const localStorage = window.localStorage;
    const StorageData = JSON.parse(`${localStorage.getItem("Vocabularys")}`);
    console.log(StorageData);

    setWords(StorageData[parseInt(`${query.index}`)].words);
  }, [query.index]);

  const [wordIndex, setWordIndex] = useState<number>(0);

  const onBeforeClick = () => {
    if (wordIndex === 0) return;
    setWordIndex(wordIndex - 1);
  };
  const onNextClick = () => {
    if (wordIndex === words.length - 1) return;
    setWordIndex(wordIndex + 1);
  };

  return (
    <div className="w-full h-screen">
      <Head>
        <title>Learn</title>
        <meta name="description" content="Made by AIDEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-black flex items-center flex-col">
        <div className="w-[390px] h-full bg-white pt-[56px] px-[24px] pb-[24px] overflow-scroll flex flex-col items-center">
          <div
            onClick={() => Router.push("/")}
            className="w-[30px] h-[30px] flex justify-center items-center absolute left-[30px] top-[30px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>

          <h1 className="-mt-[23px] text-[20px]">{query.name}</h1>

          <KRWordTest words={words} wordIndex={wordIndex} />
          <div className="flex items-center justify-between w-[320px]">
            <div
              onClick={onBeforeClick}
              className={
                wordIndex === 0
                  ? "w-[100px] opacity-40 h-[60px] mt-[50px] rounded-[10px] shadow-xl flex justify-center items-center"
                  : "w-[100px] h-[60px] mt-[50px] rounded-[10px] shadow-xl flex justify-center items-center"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
            <div
              onClick={onNextClick}
              className={
                wordIndex + 1 === words.length
                  ? "w-[100px] h-[60px] mt-[50px] bg-green-200 rounded-[10px] shadow-xl flex justify-center items-center"
                  : "w-[100px] h-[60px] mt-[50px] rounded-[10px] shadow-xl flex justify-center items-center"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
      <footer className=" static flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Learn;
