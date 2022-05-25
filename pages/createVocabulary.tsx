import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import React, { useState } from "react";
import Router from "next/router";

const CreateVocabulary: NextPage = () => {
  type word = {
    word: string;
    description: string;
  };

  type mainSet = {
    name: string;
    description: string;
  };

  const [VocaSetting, setVocaSetting] = useState<mainSet>({
    name: "",
    description: "",
  });
  const [words, setWords] = useState<word[]>([]);

  const addWord = (e: any) => {
    e.preventDefault();
    setWords([...words, { word: "", description: "" }]);
  };

  const onWordChange = (e: any, index: number) => {
    const currentData = words;
    const pushData = {
      word: e.target.value,
      description: currentData[index].description,
    };
    currentData[index] = pushData;

    setWords(currentData);
  };
  const onDescriptionChange = (e: any, index: number) => {
    const currentData = words;

    const pushData = {
      word: currentData[index].word,
      description: e.target.value,
    };
    currentData[index] = pushData;

    setWords(currentData);
  };

  const onNameChange = (e: any) => {
    const pushData = {
      name: e.target.value,
      description: VocaSetting.description,
    };

    setVocaSetting(pushData);
  };

  const onVocaDescriptionChange = (e: any) => {
    const pushData = {
      name: VocaSetting.name,
      description: e.target.value,
    };

    setVocaSetting(pushData);
  };

  const checkSettings = () => {
    if (
      VocaSetting.name === "" ||
      VocaSetting.description === "" ||
      words.length === 0
    ) {
      if (VocaSetting.name === "" || VocaSetting.description === "") {
        if (VocaSetting.name === "" && VocaSetting.description === "") {
          alert("Please fill in all fields. : Name and Description");
          return;
        } else if (VocaSetting.name === "") {
          alert("Please fill in all fields. : Name");
          return;
        } else {
          alert("Please fill in all fields. : Description");
          return;
        }
      } else {
        alert("Please add some words. : Words");
        return;
      }
    } else if (
      VocaSetting.name.length > 14 ||
      VocaSetting.description.length > 14
    ) {
      if (VocaSetting.name.length > 14 && VocaSetting.description.length > 14) {
        alert("Please fill in less than 14 characters. : Name and Description");
        return;
      } else if (VocaSetting.name.length > 14) {
        alert("Please fill in less than 14 characters. : Name");
        return;
      } else {
        alert("Please fill in less than 14 characters. : Description");
        return;
      }
    }
    if (
      words.findIndex(
        (element) => element.word === "" || element.description === ""
      ) !== -1
    ) {
      alert("Please check the blank of your words.");
      return;
    }

    return true;
  };

  const makeVoca = () => {
    const localStorage = window.localStorage;

    const data = {
      VocaName: VocaSetting.name,
      VocaDescription: VocaSetting.description,
      wordNum: words.length,
      words: words,
    };

    const currentData = localStorage.getItem("Vocabularys")
      ? JSON.parse(`${localStorage.getItem("Vocabularys")}`)
      : {};

    const pushData = {
      ...currentData,
      [Object.keys(currentData).length]: data,
    };

    localStorage.setItem("Vocabularys", JSON.stringify(pushData));
    Router.push("/");
  };

  const onMakeButtonClick = (e: any) => {
    e.preventDefault();

    checkSettings() ? makeVoca() : null;
  };

  const deleteWord = (index: number) => {
    const newWords = words.filter((_, i) => i !== index);
    setWords(newWords);
  };

  return (
    <div className="w-full h-screen">
      <Head>
        <title>MoonJunSik</title>
        <meta name="description" content="Made by AIDEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-white flex items-center flex-col relative">
        <div className="relative w-[390px] h-full bg-white pt-[56px] px-[24px] pb-[24px] overflow-scroll">
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
          <h1 className="text-[40px] text-[#111111] tracking-[-1px] leading-[40px] whitespace-pre-wrap text-left">
            Create
            <br />
            Vocabulary
          </h1>

          <div className="relative w-[342px] h-[114px] bg-[#ffffff] rounded-[20px] mt-5 border-solid border-[1px] border-[#222]">
            <div className="">
              <h1 className="left-[14px] top-[35px] absolute whitespace-pre-wrap text-[#111111] text-[20px] leading-[1px] tracking-[-1px]">
                Name
              </h1>
              <input
                onChange={onNameChange}
                placeholder="Write the name"
                className=" select-auto text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[180px] h-[30px] absolute left-[140px] top-[20px] rounded-[10px]"
              />
            </div>
            <div className="">
              <h1 className="left-[14px] top-[80px] absolute whitespace-pre-wrap text-[#111111] text-[20px] leading-[1px] tracking-[-1px]">
                Description
              </h1>
              <input
                onChange={onVocaDescriptionChange}
                placeholder="Write the description"
                className=" select-auto text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[180px] h-[30px] absolute left-[140px] top-[65px] rounded-[10px] text-left"
              />
            </div>
          </div>

          <div
            onClick={addWord}
            className="cursor-pointer w-[342px] h-[43px] mt-8 rounded-[20px] border-solid border-[1px] border-[#222] flex justify-center items-center"
          >
            <h1 className="whitespace-pre text-[#111111] leading-[1px] tracking-[-1px]">
              Add
            </h1>
          </div>

          {words.map((_, index) => (
            <div
              key={index}
              className="relative w-[342px] h-[100px] bg-[#ffffff] rounded-[10px] border-[1px] border-solid border-[#222] mt-2 flex justify-start items-start p-3 flex-col"
            >
              <input
                onChange={(e) => onWordChange(e, index)}
                placeholder="Write the word"
                className=" select-auto text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[130px] h-[30px] rounded-[10px] text-left"
              />
              <div className="flex items-center justify-start space-x-10 ml-1 mt-[-7px]">
                <h1 className="whitespace-pre tracking-[-1px] leading-[1px] mt-5">
                  Description
                </h1>
                <input
                  onChange={(e) => onDescriptionChange(e, index)}
                  placeholder="Write the description"
                  className=" select-auto text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[185px] h-[30px] rounded-[10px] text-left mt-5"
                />
              </div>

              <div
                onClick={() => deleteWord(index)}
                className="cursor-pointer flex justify-center items-center absolute w-[30px] h-[30px] bg-white right-4 rounded-lg shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}

          <button
            onClick={onMakeButtonClick}
            className="mt-10 w-[342px] items-center appearance-none bg-[#FCFCFD] rounded-[4px] border-[0px] shadow-lg  box-border text-[#36395A] cursor-pointer inline-flex h-[48px] justify-center leading-[1px]  list-none px-[16px] relative text-left  transition-shadow duration-[.14s] select-none will-change-transform text-[18px] focus:outline-none"
            role="button"
          >
            Make
          </button>
        </div>
      </main>
      <footer className=" static flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default CreateVocabulary;
