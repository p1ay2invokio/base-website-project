import { RiMenu5Line } from "react-icons/ri";
import {useRouter} from 'next/navigation'
import { useState } from "react";
import {motion} from 'framer-motion'

const Header=()=>{

    const navigate = useRouter()

    const [modal, setModal] = useState<boolean>(false)

    return(
        <div>
            <div className="w-full h-[80px] bg-black/85 border-b-[5px] border-black items-center flex p-[20px] justify-between relative">
                <p className="text-white text-[24px] font-[medium]">Wanfah Center 3.0</p>
                <RiMenu5Line onClick={()=>{
                    setModal(!modal)
                }} size={40} className="text-white cursor-pointer"/>

                <motion.div initial={{height: 0, overflow: 'hidden'}} animate={modal ? {height: 400} : {height: 0, overflow: 'hidden'}} className="w-[200px] h-[400px] bg-white shadow-lg top-[70px] right-[5px] absolute rounded-[8px]">
                    <div onClick={()=>{
                        navigate.push('/profile')
                    }} className="w-full h-[50px] flex justify-center items-center hover:bg-black/10 cursor-pointer duration-[0.2s]">
                        <p>โปรไฟล์</p>
                    </div>
                    <div onClick={()=>{
                        localStorage.removeItem('token')
                        navigate.push('/login')
                    }} className="w-full h-[50px] flex justify-center items-center hover:bg-black/10 cursor-pointer duration-[0.2s]">
                        <p>ออกจากระบบ</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Header