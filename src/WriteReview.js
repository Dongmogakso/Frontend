export default function WriteReview() {
  return (
    <div className="h-screen w-screen justify-center items-center flex bg-[#F8FAFB]">
      <div className="w-fit h-fit rounded-xl border-2 flex flex-col column border-[#D9D9D9] mb-32 px-32 py-16 bg-white justify-center items-center">
        <div className="bg-[#8B8B8B] w-96 h-96"></div>
        <textarea
          cols={30}
          rows={5}
          className="border-[#D9D9D9] border-2 mt-5 w-[500px]"
        ></textarea>
        <div className="justify-center flex mt-10 flex-col">
          <a
            href="/signup"
            className="underline text-sm text-[#4E4E4E] font-semibold text-center mt-2"
          >
            회원가입 하기
          </a>
        </div>
      </div>
    </div>
  );
}
