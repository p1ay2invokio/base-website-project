"use client"

import { useEffect, useState } from "react"
import { LoginMethod } from "./methods/login.method"
import {useRouter} from 'next/navigation'

const Login=()=>{

    const navigate = useRouter()

    const [username, setUsername] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    const handleLogin=async()=>{
        if(username && password){
            const logmed = new LoginMethod()
            const res:any = await logmed.signin(username, password)
            if(res.status == 200){
                console.log(res.data)
                localStorage.setItem("token", res.data)
                setTimeout(()=>{
                    navigate.push('/home')
                }, 1000)
            }
        }else{
            console.log("ERROR")
        }
    }
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        
        if(token){
            navigate.push('/home')
        }
    }, [])

    return(
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[900px] h-[500px] bg-white shadow-2xl rounded-[8px] flex">
                <div className="w-[30%] h-full bg-black">

                </div>

                <div className="w-[70%] h-full p-[60px]">
                    <div>
                        <p className="text-black font-[medium] text-[24px]">ยินดีต้อนรับสู่ Wanfah Center 3.0</p>
                        <p className="text-black/200 font-[light] text-[16px] mb-[20px]">ปลอดภัยและชัวร์ด้วยระบบ P2P บน Sol Smart chain</p>
                    </div>

                    <div className="flex flex-col gap-[20px]">
                        <input onChange={(e)=>{
                            setUsername(e.target.value)
                        }} placeholder="username" className="w-[100%] h-[40px] indent-[12px] outline-none ring-blue-500 focus:ring-2"></input>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }} placeholder="password" className="w-[100%] h-[40px] indent-[12px] outline-none ring-blue-500 focus:ring-2"></input>
                    </div>

                    <div className="mt-[20px] flex justify-center flex-col items-center">
                        <button onClick={()=>{
                            handleLogin()
                        }} className="w-full h-[40px] bg-blue-500 rounded-[8px] font-[medium] text-white">เข้าสู่ระบบ</button>
                        <div className="flex gap-[10px] mt-[20px]">
                            <p className="font-[light]">ยังไม่มีบัญชี?</p>
                            <p onClick={()=>{
                                navigate.push("/register")
                            }} className="font-[regular] text-blue-500 cursor-pointer">สมัครบัญชี</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login