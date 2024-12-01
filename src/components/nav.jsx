import Search from "../assets/search.png";
import Bot from "../assets/bot.png";
import Support from "../assets/support.png";
import Notification from "../assets/notification.png";

export default function Nav() {
    return <div className="w-full flex flex-row flex-nowrap items-center justify-between">
        <div className="relative w-[35%] flex flex-row flex-nowrap items-center gap-x-[20px]">
            <p className="text-xl font-medium">Leads</p>
            <input type="text" className="hidden md:block min-w-[300px] px-12 py-3 bg-gray-300 rounded-lg text-sm" placeholder="Search by name, email or room..." />
            <img src={Search} alt="search" className="hidden md:block absolute w-[18px] h-[15px] left-[25%] lg:left-[25%] min-[1200px]:left-[20%] xl:left-[19%] 2xl:left-[17%] min-[1700px]:left-[15%]" />
        </div>
        <div className="flex flex-row flex-nowrap items-center gap-x-[20px]">
            <img src={Bot} alt="bot" className="w-[25px] h-[25px] hover:cursor-pointer" />
            <img src={Support} alt="support" className="w-[25px] h-[25px] hover:cursor-pointer" />
            <img src={Notification} alt="notification" className="w-[25px] h-[25px] hover:cursor-pointer" />
            <div className="bg-green-700 rounded-[100%] w-[25px] h-[25px] flex flex-row flex-nowrap items-center justify-center text-white font-semibold hover:cursor-pointer">
                U
            </div>
        </div>
    </div>
}