import { FaLock } from "react-icons/fa";

const Profile=()=>{
    return(
        <div className="flex justify-center items-center p-[20px] flex-col">
            <div className="flex justify-center items-center flex-col">
                <img className="w-[100px] shadow-md rounded-full" src="./profiles/profile.png"></img>
                <p className="mt-[10px] font-[medium] text-[20px]">โปรไฟล์</p>
            </div>
            <div className="w-[400px] h-[400px] bg-black/10 mt-[10px] rounded-[8px] p-[20px] gap-[10px] flex flex-col shadow-lg">
                <div className="w-full h-[50px] bg-black/50 rounded-[8px] flex justify-between items-center p-[10px]">
                    <p className="font-[light] text-[16px] text-gray-200 opacity-[0.5]">ชื่อผู้ใช้</p>
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[medium] text-[18px] text-gray-200 opacity-[0.5]">play2</p>
                        <FaLock size={15} className="text-white opacity-[0.5]"/>
                    </div>
                </div>
                <div className="w-full h-[50px] bg-black/50 rounded-[8px] flex justify-between items-center p-[10px]">
                    <p className="font-[light] text-[16px] text-gray-200">ชื่อเล่น</p>
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[medium] text-[18px] text-gray-200"></p>
                    </div>
                </div>
                <div className="w-full h-[50px] bg-black/50 rounded-[8px] flex justify-between items-center p-[10px]">
                    <p className="font-[light] text-[16px] text-gray-200">แต้มสะสม</p>
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[medium] text-[18px] text-gray-200">152 points</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile