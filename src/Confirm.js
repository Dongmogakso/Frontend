export default function Confirm({text}) {
  return (
    <div className="flex justify-center">
      <button className="w-fit whitespace-nowrap font-bold text-center py-3 px-5 text-xl text-white bg-[#65A3FF] rounded-xl">
        {text}
      </button>
    </div>
  );
}
