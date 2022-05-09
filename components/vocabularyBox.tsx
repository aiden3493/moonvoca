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

  console.log(props.index);

  const color =
    props.index < 6
      ? VOCABULARY_BACKGROUND_COLOR[props.index]
      : VOCABULARY_BACKGROUND_COLOR[5];

  console.log(color);

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

      <div className="flex justify-center items-center w-[33px] h-[33px] absolute bg-[#ffffff] left-[295px] top-[13px] rounded-[10px]"></div>

      <div className="flex justify-center items-center w-[92px] h-[33px] absolute bg-[#ffffff] left-[235px] top-[95px] rounded-[10px]">
        <h1 className="text-[#44ccff] text-[18px] mt-1">Learn</h1>
      </div>
    </div>
  );
}
