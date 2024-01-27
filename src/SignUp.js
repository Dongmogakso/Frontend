import Confirm from './Confirm';

export default function SignUp() {
    return (
        <div className="h-screen w-screen justify-center flex items-center bg-[#F8FAFB]">
            <div className="w-fit h-fit rounded-xl border-2 flex flex-col column border-[#D9D9D9] mb-32 px-32 py-16 bg-white">
                <div className="font-bold text-[#65A3FF] font-mono text-3xl justify-center text-center">SIGN UP</div>
                <div className="justify-center flex mt-10 flex-col ">
                    <div className="w-fit my-3">
                        <div className="mb-3 font-semibold text-base">· ID</div>
                        <div className="rounded-md border-2 border-[#D9D9D9] w-fit">
                            <input className="h-8 m-2 w-96"></input>
                        </div>
                    </div>
                    <div className="w-fit my-3">
                        <div className="mb-3 font-semibold text-base">· PASSWORD</div>
                        <div className="rounded-md border-2 border-[#D9D9D9] w-fit">
                            <input className="h-8 m-2 w-96"></input>
                        </div>
                    </div>
                    <div className="w-fit my-3">
                        <div className="mb-3 font-semibold text-base">· CONFIRM PASSWORD</div>
                        <div className="rounded-md border-2 border-[#D9D9D9] w-fit">
                            <input className="h-8 m-2 w-96"></input>
                        </div>
                    </div>
                    <div className="w-fit my-3">
                        <div className="mb-3 font-semibold text-base">· NICKNAME</div>
                        <div className="rounded-md border-2 border-[#D9D9D9] w-fit">
                            <input className="h-8 m-2 w-96"></input>
                        </div>
                    </div>
                </div>
                <div className="justify-center flex mt-10 flex-col">
                    <Confirm text={"회원가입"}/>
                </div>
            </div>
        </div>
    );
}    