import { useEffect, useState } from "react";

export default function ENWordTest(props: any) {
  const [showMeaning, setShowMeaning] = useState<boolean>(false);

  const wordData = props.words;

  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const whenStarClick = () => {
    const staredWords: number[] = [...props.staredWords];
    const stared = props.stared;

    props.setStared(!stared);

    if (!stared) {
      staredWords.push(props.wordIndex);
      props.setStaredWords([...staredWords]);

      return;
    }
    props.setStaredWords([
      ...staredWords.filter((index: number) => index !== props.wordIndex),
    ]);
  };

  useEffect(() => {
    setShowMeaning(false);
    setWord(
      wordData[props.wordIndex] ? `${wordData[props.wordIndex].word}` : ""
    );
    setMeaning(
      wordData[props.wordIndex]
        ? `${wordData[props.wordIndex].description}`
        : ""
    );
  }, [wordData, props.wordIndex]);

  return (
    <div className=" relative">
      <div
        onClick={whenStarClick}
        className="z-50 cursor-pointer absolute w-[50px] h-[50px] top-[100px] right-[15px] flex justify-center items-center"
      >
        {props.stared ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="#ffe549"
            viewBox="0 0 24 24"
            stroke="#ffe549"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )}
      </div>

      <div
        onClick={() => setShowMeaning(!showMeaning)}
        className="cursor-pointer relative w-[320px] h-[500px] mt-[65px] rounded-[10px] shadow-xl flex justify-center items-center"
      >
        <h1 className="absolute top-12 text-[20px]">
          {props.wordIndex + 1} / {props.words.length}
        </h1>
        {showMeaning ? (
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[24px]">{meaning}</h1>
            <h1 className="text-[20px] text-gray-400 text-center whitespace-pre-wrap">
              {word}
            </h1>
          </div>
        ) : (
          <h1 className="text-[24px]">{meaning}</h1>
        )}
      </div>
    </div>
  );
}
