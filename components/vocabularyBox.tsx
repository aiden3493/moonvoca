import { useState } from "react";

export default function VocabularyBox(props: any) {
  //get props from parent component of index, color, name, description, words

  const VOCABULARY_BACKGROUND_COLOR = [
    "#44ccff",
    "#33aaff",
    "#3388ff",
    "#2266ff",
    "#0044ff",
    "#5500ff",
  ];

  const color =
    props.index < 6
      ? VOCABULARY_BACKGROUND_COLOR[props.index]
      : VOCABULARY_BACKGROUND_COLOR[5];

  return (
    <div
      className="relative w-full h-[140px] mt-2 rounded-[10px]"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="absolute left-4 top-[1.65rem] w-[289px] h-[87px] text-[24px] tracking-[1px] leading-[25px] text-[#ffffff] whitespace-pre-wrap">
        <h1>{props.name}</h1>
        <h1>{props.description}</h1>
        <h1>{`${props.words} words`}</h1>
      </div>

      <div className="cursor-pointer flex justify-center items-center w-[33px] h-[33px] absolute bg-[#ffffff] left-[255px] top-[13px] rounded-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </div>

      <div
        onClick={() => props.handleDeleteVocabulary(props.name)}
        className="cursor-pointer flex justify-center items-center w-[33px] h-[33px] absolute bg-[#ffffff] left-[295px] top-[13px] rounded-[10px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>

      <div className="cursor-pointer flex justify-center items-center w-[92px] h-[33px] absolute bg-[#ffffff] left-[235px] top-[95px] rounded-[10px]">
        <h1 className="text-[#44ccff] text-[18px] mt-1">Learn</h1>
      </div>
    </div>
  );
}
