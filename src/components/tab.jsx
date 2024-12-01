import Users from "../assets/users.png";

export default function Tab({ number, text, colorClassName }) {
    return <div className={`relative min-w-[250px] md:min-w-0 md:w-[19%] flex flex-col flex-nowrap justify-end gap-y-[30px] bg-gray-300 h-[200px] rounded-[10px] p-[20px] ${colorClassName} font-semibold`}>
        <img src={Users} alt="group" className="absolute w-[25px] h-[25px] top-4 right-4" />
        <p className="text-4xl">{number}</p>
        <p className="text-sm md:text-base">{text}</p>
    </div>
}