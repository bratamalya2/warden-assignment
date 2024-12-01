import Phone from "../assets/phone-call.png";
import Building from "../assets/building.png";

export default function DataTable() {
    return <>
        <table className="hidden md:block mt-[30px] w-full">
            <thead className="w-full flex flex-row flex-nowrap item-center justify-between">
                <th className="w-[12%]">ID</th>
                <th className="w-[12%]">NAME</th>
                <th className="w-[12%]">VISIT DATE</th>
                <th className="w-[12%]">STATUS</th>
                <th className="w-[12%]">ROOM RESERVED</th>
                <th className="w-[12%]">TENTATIVE CHECK-IN</th>
                <th className="w-[12%]">SOURCE</th>
                <th className="w-[12%]">ACTIVITY</th>
            </thead>
            <tbody className="mt-[15px] w-full flex flex-col flex-nowrap gap-y-[20px]">
                <tr className="w-full flex flex-row flex-nowrap item-center justify-between">
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">#6775</td>
                    <td className="w-[12%] flex flex-row flex-nowrap items-center justify-center gap-x-[5px]">
                        <div className="bg-red-200 text-white p-2 rounded-md font-medium">TL</div>
                        <div>
                            <p>Test Lead</p>
                            <p>7844557854</p>
                        </div>
                    </td>
                    <td className="w-[12%]  text-center flex flex-col justify-center items-center">-</td>
                    <td className="w-[12%] bg-yellow-400 text-amber-800 font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Active</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Warden Boys Life</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">-</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Walk In</td>
                    <td className="w-[12%] text-blue-400 text-center flex flex-col justify-center items-center">Reserve Room</td>
                </tr>
                <tr className="w-full flex flex-row flex-nowrap item-center justify-between">
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">#6260</td>
                    <td className="w-[12%] flex flex-row flex-nowrap items-center justify-center gap-x-[5px]">
                        <div className="bg-red-200 text-white p-2 rounded-md font-medium">CT</div>
                        <div>
                            <p>Contract Test</p>
                            <p>7844557854</p>
                        </div>
                    </td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">-</td>
                    <td className="w-[12%] bg-yellow-400 text-amber-800 font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Active</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Warden Boys Life</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">-</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Referral</td>
                    <td className="w-[12%] text-blue-400 text-center flex flex-col justify-center items-center">Reserve Room</td>
                </tr>
                <tr className="w-full flex flex-row flex-nowrap item-center justify-between">
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">#1664</td>
                    <td className="w-[12%] flex flex-row flex-nowrap items-center justify-center gap-x-[5px]">
                        <div className="bg-red-200 text-white p-2 rounded-md font-medium">T1</div>
                        <div>
                            <p>Test Lead 121</p>
                            <p>7857557854</p>
                        </div>
                    </td>
                    <td className="w-[12%]  text-center flex flex-col justify-center items-center">-</td>
                    <td className="w-[12%] bg-red-400 text-amber-800 font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Payment Due</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Warden Boys Life</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">May 23, 2024</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Website</td>
                    <td className="w-[12%] text-blue-400 text-center flex flex-col justify-center items-center">Payment Pending</td>
                </tr>
                <tr className="w-full flex flex-row flex-nowrap item-center justify-between">
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">#610</td>
                    <td className="w-[12%] flex flex-row flex-nowrap items-center justify-center gap-x-[5px]">
                        <div className="bg-red-200 text-white p-2 rounded-md font-medium">T1</div>
                        <div>
                            <p>Test Lead 123</p>
                            <p>7853256854</p>
                        </div>
                    </td>
                    <td className="w-[12%]  text-center flex flex-col justify-center items-center">-</td>
                    <td className="w-[12%] bg-green-600 text-white font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Reserved</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Warden Boys Life</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">May 27, 2024</td>
                    <td className="w-[12%] text-center flex flex-col justify-center items-center">Google Search</td>
                    <td className="w-[12%] text-blue-400 text-center flex flex-col justify-center items-center">Resgistration pending</td>
                </tr>
            </tbody>
        </table>
        <div className="w-full flex md:hidden flex-col gap-y-[10px] mt-[20px]">
            <div className="relative w-full p-3 flex flex-col gap-y-[20px] bg-gray-200 rounded-[10px] text-sm">
                <div className="flex flex-row flex-nowrap gap-x-[10px]">
                    <div className="bg-red-200 text-white px-[6px] rounded-md font-medium h-[35px] flex flex-row items-center justify-center">TL</div>
                    <div>
                        <p>Test Lead</p>
                        <p>Lead ID #6775</p>
                    </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Phone} alt="phone" className="w-[15px] h-[15px]" />
                    +9195782344
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Building} alt="building" className="w-[15px] h-[10px]" />
                    Warden Boys Life
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    Walk In
                </div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-amber-800 font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Active</div>
                <div className="absolute bottom-2 right-2 text-blue-400 font-medium flex flex-row flex-nowrap items-center justify-center">Reserve Room</div>
            </div>
            <div className="relative w-full p-3 flex flex-col gap-y-[20px] bg-gray-200 rounded-[10px] text-sm">
                <div className="flex flex-row flex-nowrap gap-x-[10px]">
                    <div className="bg-red-200 text-white px-[6px] rounded-md font-medium h-[35px] flex flex-row items-center justify-center">TL</div>
                    <div>
                        <p>Contract Test</p>
                        <p>Lead ID #6260</p>
                    </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Phone} alt="phone" className="w-[15px] h-[15px]" />
                    +9195576344
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Building} alt="building" className="w-[15px] h-[10px]" />
                    Warden Boys Life
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    Referral
                </div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-amber-800 font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Active</div>
                <div className="absolute bottom-2 right-2 text-blue-400 font-medium flex flex-row flex-nowrap items-center justify-center">Reserve Room</div>
            </div>
            <div className="relative w-full p-3 flex flex-col gap-y-[20px] bg-gray-200 rounded-[10px] text-sm">
                <div className="flex flex-row flex-nowrap gap-x-[10px]">
                    <div className="bg-red-200 text-white px-[6px] rounded-md font-medium h-[35px] flex flex-row items-center justify-center">TL</div>
                    <div>
                        <p>Contract Test</p>
                        <p>Lead ID #6460</p>
                    </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Phone} alt="phone" className="w-[15px] h-[15px]" />
                    +9195336344
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Building} alt="building" className="w-[15px] h-[10px]" />
                    Warden Boys Life
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    Referral
                </div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-amber-800 font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Active</div>
                <div className="absolute bottom-2 right-2 text-blue-400 font-medium flex flex-row flex-nowrap items-center justify-center">Reserve Room</div>
            </div>
            <div className="relative w-full p-3 flex flex-col gap-y-[20px] bg-gray-200 rounded-[10px] text-sm">
                <div className="flex flex-row flex-nowrap gap-x-[10px]">
                    <div className="bg-red-200 text-white px-[6px] rounded-md font-medium h-[35px] flex flex-row items-center justify-center">TL</div>
                    <div>
                        <p>Contract Test</p>
                        <p>Lead ID #6430</p>
                    </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Phone} alt="phone" className="w-[15px] h-[15px]" />
                    +9195366344
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    <img src={Building} alt="building" className="w-[15px] h-[10px]" />
                    Warden Boys Life
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                    Referral Lorem
                </div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-amber-800 font-medium p-1 rounded-md flex flex-row flex-nowrap items-center justify-center">Active</div>
                <div className="absolute bottom-2 right-2 text-blue-400 font-medium flex flex-row flex-nowrap items-center justify-center">Reserve Room</div>
            </div>
        </div>
    </>
}