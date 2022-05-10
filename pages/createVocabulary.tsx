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

  const onDescriptionChange = (e: any, index: number) => {
    let currentData = words[index];
    currentData.description = e.target.value;
    words[index] = currentData;
  };

  const onWordChange = (e: any, index: number) => {
    let currentData = words[index];
    currentData.word = e.target.value;
    words[index] = currentData;
  };

  const onNameChange = (e: any) => {
    let currentData = VocaSetting;
    currentData.name = e.target.value;
    setVocaSetting(currentData);
  };

  const onVocaDescriptionChange = (e: any) => {
    let currentData = VocaSetting;
    currentData.description = e.target.value;
    setVocaSetting(currentData);
  };

  const onMakeButtonClick = (e: any) => {
    e.preventDefault();
    const localStorage = window.localStorage;

    const data = {
      VocaName: VocaSetting.name,
      VocaDescription: VocaSetting.description,
      wordNum: words.length,
      words: words,
    };

    localStorage.setItem(VocaSetting.name, JSON.stringify(data));

    Router.push("/");
  };

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

          <div className="relative w-[342px] h-[115px] bg-[#ffffff] rounded-[20px] mt-5 border-solid border-[1px] border-[#222]">
            <div className="">
              <h1 className="left-[15px] top-[35px] absolute whitespace-pre-wrap text-[#111111] text-[20px] leading-[1px] tracking-[-1px]">
                Name
              </h1>
              <input
                onChange={onNameChange}
                placeholder="Write the name"
                className="text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[180px] h-[30px] absolute left-[140px] top-[20px] rounded-[10px]"
              />
            </div>
            <div className="">
              <h1 className="left-[15px] top-[80px] absolute whitespace-pre-wrap text-[#111111] text-[20px] leading-[1px] tracking-[-1px]">
                Description
              </h1>
              <input
                onChange={onVocaDescriptionChange}
                placeholder="Write the description"
                className="text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[180px] h-[30px] absolute left-[140px] top-[65px] rounded-[10px] text-left"
              />
            </div>
          </div>

          <div
            onClick={addWord}
            className="w-[342px] h-[43px] mt-8 rounded-[20px] border-solid border-[1px] border-[#222] flex justify-center items-center"
          >
            <h1 className="whitespace-pre text-[#111111] leading-[1px] tracking-[-1px]">
              Add
            </h1>
          </div>

          {words.map((_, index) => (
            <div
              key={index}
              className="w-[342px] h-[100px] bg-[#ffffff] rounded-[10px] border-[1px] border-solid border-[#222] mt-2 flex justify-start items-start p-3 flex-col"
            >
              <input
                onChange={(e) => onWordChange(e, index)}
                placeholder="Write the word"
                className="text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[130px] h-[30px] rounded-[10px] text-left"
              />
              <div className="flex items-center justify-start space-x-10 ml-1 mt-[-7px]">
                <h1 className="whitespace-pre tracking-[-1px] leading-[1px] mt-5">
                  Description
                </h1>
                <input
                  onChange={(e) => onDescriptionChange(e, index)}
                  placeholder="Write the description"
                  className="text-black pl-3 pt-[2.5px] text-[12px] outline-none bg-[#E6E6E6] w-[185px] h-[30px] rounded-[10px] text-left mt-5"
                />
              </div>
            </div>
          ))}

          <button
            onClick={onMakeButtonClick}
            className="mt-10 w-[342px] items-center appearance-none bg-[#FCFCFD] rounded-[4px] border-[0px] shadow-lg  box-border text-[#36395A] cursor-pointer inline-flex h-[48px] justify-center leading-[1px]  list-none px-[16px] relative text-left  transition-shadow duration-[.15s] select-none will-change-transform text-[18px] focus:outline-none"
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
