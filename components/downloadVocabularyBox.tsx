import { useEffect, useState } from "react";

export default function DownloadVocabularyBox(props: any) {
  //get props from parent component of index, color, name, description, words

  const [downloaded, setDownloaded] = useState(false);

  const [pushData, setPushData] = useState({});

  const onDownloadClick = () => {
    props.handleDownloadVocabulary(props.data.name);
    props.setPushData(pushData);
    props.setShowDownloadModal(true);
  };

  useEffect(() => {
    const localStorage = window.localStorage;

    const data = {
      VocaName: props.data.name,
      VocaDescription: props.data.description,
      wordNum: props.data.wordsNum,
      words: JSON.parse(props.data.words),
    };

    const currentData = localStorage.getItem("Vocabularys")
      ? JSON.parse(`${localStorage.getItem("Vocabularys")}`)
      : {};

    for (const key in currentData) {
      if (JSON.stringify(currentData[key]) === JSON.stringify(data)) {
        setDownloaded(true);
        return;
      }
    }

    const pushData = {
      ...currentData,
      [Object.keys(currentData).length]: data,
    };
    setPushData(pushData);
  }, [props.data, props.showDownloadModal]);

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
        <h1>{props.data.name}</h1>
        <h1>{props.data.description}</h1>
        <h1>{`${props.data.wordsNum} words`}</h1>
      </div>

      <div
        onClick={onDownloadClick}
        className=" z-[9999] cursor-pointer flex justify-center items-center pt-1 w-[92px] h-[33px] absolute bg-[#ffffff] left-[235px] top-[95px] rounded-[10px]"
      >
        <h1 className="text-[#44ccff] text-[12px]">
          {downloaded ? "downloaded" : "download"}
        </h1>
      </div>
    </div>
  );
}
