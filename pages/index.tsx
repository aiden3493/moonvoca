import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import VocabularyBox from "../components/vocabularyBox";
import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteVocabularyModal from "../components/deleteVocabularyModal";
import LearnVocavularyModal from "../components/learnVocabularyModal";
import ShareVocabularyModal from "../components/shareVocabularyModal";
import Router from "next/router";

const Home: NextPage = () => {
  type Vocabulary = {
    VocaName: string;
    VocaDescription: string;
    wordNum: number;
    words: object;
  };

  const [Voca, setVoca] = useState<Vocabulary[]>([]);

  const [deleteVocabularyModal, setDeleteVocabularyModal] =
    useState<boolean>(false);

  const [currentDeleteVocabulary, setCurrentDeleteVocabulary] =
    useState<String>("");

  const handleDeleteVocabulary = (vocaName: String) => {
    setCurrentDeleteVocabulary(vocaName);
    setDeleteVocabularyModal(true);
  };

  const deleteVocabulary = (name: string) => {
    const localStorage = window.localStorage;
    const StorageData = JSON.parse(`${localStorage.getItem("Vocabularys")}`);

    const storageDataArray = Object.keys(StorageData);

    const currentDeletingVocabularyIndex = storageDataArray.findIndex(
      (element) => StorageData[element].VocaName === name
    );

    delete StorageData[storageDataArray[currentDeletingVocabularyIndex]];

    StorageData === {}
      ? localStorage.removeItem("Vocabularys")
      : localStorage.setItem("Vocabularys", JSON.stringify(StorageData));

    let data: Vocabulary[] = [];

    for (let key in StorageData) {
      const datas = StorageData[key];

      data = [
        ...data,
        {
          VocaName: datas.VocaName,
          VocaDescription: datas.VocaDescription,
          wordNum: datas.wordNum,
          words: datas.words,
        },
      ];
    }

    setVoca(data);
    setDeleteVocabularyModal(false);
  };

  const [learnVocabularyModal, setLearnVocabularyModal] =
    useState<boolean>(false);

  const [currentLearnVocabulary, setCurrentLearnVocabulary] =
    useState<String>();

  const [
    currentLearnVocabularyDescription,
    setCurrentLearnVocabularyDescription,
  ] = useState<String>();

  const [currentLearnVocabularyWordsNum, setCurrentLearnVocabularyWordsNum] =
    useState<Number>();

  const [currentLearnVocabularyIndex, setCurrentLearnVocabularyIndex] =
    useState<Number>();

  const handleLearnVocabulary = (
    vocaName: String,
    VocaDescription: String,
    wordsNum: Number,
    index: Number
  ) => {
    setLearnVocabularyModal(true);
    setCurrentLearnVocabulary(vocaName);
    setCurrentLearnVocabularyDescription(VocaDescription);
    setCurrentLearnVocabularyWordsNum(wordsNum);
    setCurrentLearnVocabularyIndex(index);
  };

  const learnVocabulary = (
    name: string,
    description: string,
    index: number,
    MODE: string
  ) => {
    if (MODE === "EN") {
      Router.push({
        pathname: "/learn/EN",
        query: {
          name,
          description,
          index: index,
          MODE,
        },
      });
    } else if (MODE === "KR") {
      Router.push({
        pathname: "/learn/KR",
        query: {
          name,
          description,
          index,
          MODE,
        },
      });
    } else {
      Router.push({
        pathname: "/learn/MIX",
        query: {
          name,
          description,
          index,
          MODE,
        },
      });
    }
  };

  const [shareVocabularyModal, setShareVocabularyModal] =
    useState<boolean>(false);

  const [currentShareVocabulary, setCurrentShareVocabulary] =
    useState<String>();

  const [
    currentShareVocabularyDescription,
    setCurrentShareVocabularyDescription,
  ] = useState<String>();

  const [currentShareVocabularyWordsNum, setCurrentShareVocabularyWordsNum] =
    useState<Number>();

  const [currentShareVocabularyWords, setCurrentShareVocabularyWords] =
    useState<object[]>([]);

  const handleShareVocabulary = (
    vocaName: String,
    VocaDescription: String,
    wordsNum: Number,
    words: object[]
  ) => {
    setShareVocabularyModal(true);
    setCurrentShareVocabulary(vocaName);
    setCurrentShareVocabularyDescription(VocaDescription);
    setCurrentShareVocabularyWordsNum(wordsNum);
    setCurrentShareVocabularyWords(words);
  };

  useEffect(() => {
    const localStorage = window.localStorage;
    const StorageData = localStorage.getItem("Vocabularys")
      ? JSON.parse(`${localStorage.getItem("Vocabularys")}`)
      : {};

    let data: Vocabulary[] = [];

    for (let key in StorageData) {
      const datas = StorageData[key];

      data = [
        ...data,
        {
          VocaName: datas.VocaName,
          VocaDescription: datas.VocaDescription,
          words: datas.words,
          wordNum: datas.wordNum,
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
            Test
            <br />
            Test
          </h1>

          <Link href="/createVocabulary" passHref>
            <div className=" cursor-pointer w-[342px] h-[84px] bg-[#99eeff] rounded-[10px] mt-5 flex justify-center items-center">
              <h1 className=" whitespace-pre text-[#ffffff] text-[24px] leading-[1px] tracking-[-1px]">
                Add
              </h1>
            </div>
          </Link>

          <Link href="/vocabularyStore" passHref>
            <div className=" cursor-pointer w-[342px] h-[50px] bg-[#ffffff] rounded-[10px] mt-2 flex justify-center items-center border-black border-[1px] border-solid">
              <h1 className="mr-1 mt-1 whitespace-pre text-black text-[18px] leading-[1px] tracking-[-1px]">
                DownLoad
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </div>
          </Link>

          {Voca.map((voca, index) => (
            <VocabularyBox
              key={index + 1}
              index={index}
              name={voca.VocaName}
              description={voca.VocaDescription}
              words={voca.words}
              wordsNum={voca.wordNum}
              handleDeleteVocabulary={handleDeleteVocabulary}
              handleLearnVocavulary={handleLearnVocabulary}
              handleShareVocabulary={handleShareVocabulary}
            />
          ))}

          {deleteVocabularyModal ? (
            <DeleteVocabularyModal
              currentDeleteVocabulary={currentDeleteVocabulary}
              deleteVocabulary={deleteVocabulary}
              setDeleteVocabularyModal={setDeleteVocabularyModal}
            />
          ) : null}

          {learnVocabularyModal ? (
            <LearnVocavularyModal
              currentLearnVocabulary={currentLearnVocabulary}
              currentLearnVocabularyDescription={
                currentLearnVocabularyDescription
              }
              currentLearnVocabularyWordsNum={currentLearnVocabularyWordsNum}
              setLearnVocabularyModal={setLearnVocabularyModal}
              learnVocabulary={learnVocabulary}
              index={currentLearnVocabularyIndex}
            />
          ) : null}

          {shareVocabularyModal ? (
            <ShareVocabularyModal
              setShareVocabularyModal={setShareVocabularyModal}
              currentShareVocabulary={currentShareVocabulary}
              currentShareVocabularyDescription={
                currentShareVocabularyDescription
              }
              currentShareVocabularyWords={currentShareVocabularyWords}
              currentShareVocabularyWordsNum={currentShareVocabularyWordsNum}
            />
          ) : null}
        </div>
      </main>
      <footer className=" static flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
