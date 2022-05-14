import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import VocabularyBox from "../components/vocabularyBox";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    setDeleteVocabularyModal(true);
    setCurrentDeleteVocabulary(vocaName);
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
            Moon
            <br />
            JunSik
          </h1>

          <Link href="/createVocabulary" passHref>
            <div className=" cursor-pointer w-[342px] h-[84px] bg-[#99eeff] rounded-[10px] mt-5 flex justify-center items-center">
              <h1 className=" whitespace-pre text-[#ffffff] text-[24px] leading-[1px] tracking-[-1px]">
                Add
              </h1>
            </div>
          </Link>

          {Voca.map((voca, index) => (
            <VocabularyBox
              key={index}
              index={index}
              name={voca.VocaName}
              description={voca.VocaDescription}
              words={voca.words}
              wordsNum={voca.wordNum}
              handleDeleteVocabulary={handleDeleteVocabulary}
            />
          ))}

          {deleteVocabularyModal ? (
            <div className="absolute flex justify-center items-center w-[340px] h-screen top-0 backdrop-blur-[2px]">
              <div className="top-[20%] w-full flex justify-center items-center">
                <div className="bg-white flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2 py-3">
                  <h2 className="text-base mt-5 mx-4 text-gray-400 text-center">
                    Would you delete this vocabulary?
                  </h2>
                  <div className="bg-gray-100 p-2 rounded-md mt-3 shadow-lg">
                    <h2 className="text-xl mt-1">{currentDeleteVocabulary}</h2>
                  </div>
                  <div className="space-x-2 mt-5">
                    <button
                      className=" cursor-pointer my-5 w-auto px-8 h-10 bg-green-400 text-white rounded-md shadow hover:shadow-lg"
                      onClick={() =>
                        deleteVocabulary(`${currentDeleteVocabulary}`)
                      }
                    >
                      Confirm
                    </button>

                    <button
                      className=" cursor-pointer my-5 w-auto px-8 h-10 bg-red-500 text-white rounded-md shadow hover:shadow-lg"
                      onClick={() => setDeleteVocabularyModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
