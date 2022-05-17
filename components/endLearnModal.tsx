import Router from "next/router";

export default function EndLearnModal(props: any) {
  console.log("staredWrods", props.staredWords);

  const retry = () => {
    if (props.query.MODE === "EN") {
      Router.push(
        {
          pathname: "/learn/EN",
          query: {
            name: props.query.name,
            description: props.query.description,
            index: props.query.index,
            MODE: props.query.MODE,
            staredWords: props.staredWords.toString(),
          },
        },
        undefined,
        { shallow: false }
      );
    } else if (props.query.MODE === "KR") {
      Router.push(
        {
          pathname: "/learn/KR",
          query: {
            name: props.query.name,
            description: props.query.description,
            index: props.query.index,
            MODE: props.query.MODE,
            staredWords: props.staredWords.toString(),
          },
        },
        undefined,
        { shallow: false }
      );
    } else {
      Router.push(
        {
          pathname: "/learn/MIX",
          query: {
            name: props.query.name,
            description: props.query.description,
            index: props.query.index,
            MODE: props.query.MODE,
            staredWords: props.staredWords.toString(),
          },
        },
        undefined,
        { shallow: false }
      );
    }
  };

  return (
    <div className="absolute flex justify-center items-center w-[340px] h-screen top-0 backdrop-blur-[2px]">
      <div className="top-[20%] w-full flex justify-center items-center">
        <div className="bg-white flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2 py-3">
          {props.staredWords.length === 0 ? (
            <h2 className="text-base mt-5 mx-4 text-gray-400 text-center">
              Would you end learning?
            </h2>
          ) : (
            <h2 className="text-base mt-5 mx-4 text-gray-400 text-center">
              Would you retry for the wrong words?
            </h2>
          )}
          <div className="bg-gray-100 p-2 px-5 rounded-md mt-3 shadow-lg">
            <h2 className="text-xl mt-1">{props.query.name}</h2>
          </div>
          <div className=" mt-5 flex justify-center flex-wrap">
            {props.staredWords.length === 0 ? (
              <div className="space-x-4">
                <button
                  className=" cursor-pointer my-5 w-auto px-8 h-10 bg-green-400 text-white rounded-md shadow hover:shadow-lg"
                  onClick={() => Router.push("/")}
                >
                  Confirm
                </button>

                <button
                  className=" cursor-pointer my-5 w-auto px-8 h-10 bg-red-500 text-white rounded-md shadow hover:shadow-lg"
                  onClick={() => props.setShowEndModal(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="space-x-4">
                  <button
                    className=" cursor-pointer my-5 w-auto px-8 h-10 bg-green-400 text-white rounded-md shadow hover:shadow-lg"
                    onClick={retry}
                  >
                    Confirm
                  </button>

                  <button
                    className=" cursor-pointer my-5 w-auto px-8 h-10 bg-red-500 text-white rounded-md shadow hover:shadow-lg"
                    onClick={() => Router.push("/")}
                  >
                    No
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => props.setShowEndModal(false)}
                    className="-mt-5 cursor-pointer mb-5 w-[235px] px-8 h-10 bg-red-500 text-white rounded-md shadow hover:shadow-lg"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
