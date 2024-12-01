import Tab from "./tab";

export default function Tabs() {
    return <div className="mt-[30px] w-full flex flex-row flex-nowrap items-center justify-between overflow-x-scroll gap-x-[15px] md:gap-x-0">
        <Tab number="1" text="Active Leads, Pending Reservation" colorClassName="text-red-600" />
        <Tab number="1" text="Payment Due Leads (0 beds)" colorClassName="text-red-600" />
        <Tab number="1" text="Reserved Leads (0 beds)" colorClassName="text-black" />
        <Tab number="4" text="Total Leads in Pipeline (0 beds)" colorClassName="text-black" />
        <Tab number="2" text="Cancellation" colorClassName="text-black" />
    </div>
}