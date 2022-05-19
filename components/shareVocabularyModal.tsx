export default function ShareVocabularyModal(props: any) {
  const shareVocabulary = async (e: any) => {
    e.preventDefault();

    const res = await fetch("api/create", {
      body: JSON.stringify({
        name: props.currentShareVocabulary,
        description: props.currentShareVocabularyDescription,
        words: JSON.stringify(props.currentShareVocabularyWords),
        wordsNum: props.currentShareVocabularyWordsNum,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    await props.setShareVocabularyModal(false);
  };

  return (
    <div className="absolute flex justify-center items-center w-[340px] h-screen top-0 backdrop-blur-[2px]">
      <div className="top-[20%] w-full flex justify-center items-center">
        <div className="bg-white flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2 py-3">
          <h2 className="text-base mt-5 mx-4 text-gray-400 text-center">
            Would you share this vocabulary?
          </h2>
          <div className="bg-gray-100 p-2 px-5 rounded-md mt-3 shadow-lg">
            <h2 className="text-xl mt-1">{props.currentShareVocabulary}</h2>
          </div>
          <div className="space-x-2 mt-5">
            <button
              className=" cursor-pointer my-5 w-auto px-8 h-10 bg-green-400 text-white rounded-md shadow hover:shadow-lg"
              onClick={shareVocabulary}
            >
              Upload
            </button>

            <button
              className=" cursor-pointer my-5 w-auto px-8 h-10 bg-red-500 text-white rounded-md shadow hover:shadow-lg"
              onClick={() => props.setShareVocabularyModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
