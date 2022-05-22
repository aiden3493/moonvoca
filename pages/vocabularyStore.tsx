import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import DownloadVocabularyBox from "../components/downloadVocabularyBox";
import DownloadVocabularyModal from "../components/downloadVocabularyModal";

const VocabularyStore: NextPage = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [pushData, setPushData] = useState<object>({});

  const [currentDownloadVocabulary, setCurrentDownloadVocabulary] =
    useState<string>("");

  const handleDownloadVocabulary = (vocaName: string) => {
    setCurrentDownloadVocabulary(vocaName);
  };

  const [hits, setHits] = useState<any[]>([]);

  const search = async (event: any) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch("api/search?" + params);

      const result = await res.json();

      setHits(result["vocabularys"]);
    }
  };

  return (
    <div className="w-full h-screen">
      <Head>
        <title>VocabularyStore</title>
        <meta name="description" content="Made by AIDEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-black flex items-center flex-col">
        <div
          onClick={() => Router.push("/")}
          className="cursor-pointer absolute w-[44px] h-[44px] bg-white right-[30px] top-[20px] rounded-lg shadow-xl flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="w-[390px] h-full bg-white pt-[56px] px-[24px] pb-[24px] overflow-scroll">
          <h1 className="text-[40px] text-[#111111] tracking-[-1px] leading-[40px] whitespace-pre-wrap text-left">
            Vocabulary
            <br />
            Store
          </h1>
          <input
            onChange={search}
            className="outline-none pl-5 w-full h-[40px] bg-whites mt-5 rounded-[10px] border-black border-solid border-[1px]"
          />

          <ul className="w-full mt-5 h-full">
            {hits.map((hit, index) => (
              <li key={hit.entityId}>
                <DownloadVocabularyBox
                  data={hit}
                  index={index}
                  setShowDownloadModal={setShowDownloadModal}
                  handleDownloadVocabulary={handleDownloadVocabulary}
                  setPushData={setPushData}
                  showDownloadModal={showDownloadModal}
                />
              </li>
            ))}
          </ul>
        </div>

        {showDownloadModal ? (
          <DownloadVocabularyModal
            setShowDownloadModal={setShowDownloadModal}
            currentDownloadVocabulary={currentDownloadVocabulary}
            pushData={pushData}
          />
        ) : null}
      </main>
      <footer className=" static flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default VocabularyStore;
