import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import Confirm from './Confirm';

export default function SignIn() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function postLoginData() {
        console.log(id, password);
        return axios
            .post(
                "http://localhost:8080/login",
                {
                    email: id,
                    password,
                },
                { withCredentials: true },
            )
            .then(response => {
                console.log(response.data);

                navigate("/");
                // 로그인 성공 처리
            })
            .catch(error => {
                alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.");
                console.error(error);
            });
    }

    return (
        <div className="h-screen w-screen justify-center flex items-center bg-[#F8FAFB]">
            <div className="w-fit h-fit rounded-xl border-2 flex flex-col column border-[#D9D9D9] mb-32 px-32 py-16 bg-white">
                <div className="font-bold text-[#65A3FF] font-mono text-3xl justify-center text-center">SIGN IN</div>
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
                </div>
                <div className="justify-center flex mt-10 flex-col">
                    <Confirm text={"로그인"} onClick={postLoginData}/>
                    <a href="/signup" className="underline text-sm text-[#4E4E4E] font-semibold text-center mt-2">회원가입 하기</a>
                </div>
            </div>
        </div>
    );
}    