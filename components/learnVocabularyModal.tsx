export default function LearnVocavularyModal(props: any) {
  return (
    <div className="absolute flex justify-center items-center w-[340px] h-screen top-0 backdrop-blur-[2px]">
      <div className="top-[20%] w-full flex justify-center items-center">
        <div className="relative bg-white flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2 py-3">
          <div
            onClick={() => props.setLearnVocabularyModal(false)}
            className="w-[30px] h-[30px] absolute right-3 top-[25px] flex justify-center items-center "
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-base mt-5 mx-4 text-gray-400 text-center">
            Would you learn this vocabulary?
          </h2>
          <div className="bg-gray-100 p-2 px-5 rounded-md mt-3 shadow-lg flex justify-center items-center flex-col">
            <h2 className="text-xl mt-1">{props.currentLearnVocabulary}</h2>
            <h2 className="text-xl mt-1">
              {props.currentLearnVocabularyDescription}
            </h2>
            <h2 className="text-xl mt-1">
              Words: {props.currentLearnVocabularyWordsNum}
            </h2>
          </div>
          <div className="space-x-2 mt-5">
            <button
              className=" cursor-pointer my-5 w-[75px] px-3 h-10 bg-green-400 text-white rounded-md shadow hover:shadow-lg"
              onClick={() =>
                props.learnVocabulary(
                  `${props.currentLearnVocabulary}`,
                  `${props.currentLearnVocabularyDescription}`,
                  `${props.index}`,
                  "EN"
                )
              }
            >
              EN
            </button>
            <button
              className=" cursor-pointer my-5 w-[75px] px-3 h-10 bg-green-400 text-white rounded-md shadow hover:shadow-lg"
              onClick={() =>
                props.learnVocabulary(
                  `${props.currentLearnVocabulary}`,
                  `${props.currentLearnVocabularyDescription}`,
                  `${props.index}`,
                  "KR"
                )
              }
            >
              KR
            </button>
            <button
              className=" cursor-pointer my-5 w-[75px] px-3 h-10 bg-green-400 text-white rounded-md shadow hover:shadow-lg"
              onClick={() =>
                props.learnVocabulary(
                  `${props.currentLearnVocabulary}`,
                  `${props.currentLearnVocabularyDescription}`,
                  `${props.index}`,
                  "MIX"
                )
              }
            >
              MIX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
