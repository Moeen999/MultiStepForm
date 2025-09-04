    export const SideBar =({currPage})=>{
        const steps = [
        { number: 1, step: "STEP 1", label: "YOUR INFO" },
        { number: 2, step: "STEP 2", label: "SELECT PLAN" },
        { number: 3, step: "STEP 3", label: "ADD-ONS" },
        { number: 4, step: "STEP 4", label: "SUMMARY" },
    ];
    return(
        <>
        <aside className="w-full md:w-[260px] md:h-[450px] relative">
            {/* medium/desktop wali screen pr sidebar ki positioning or visibility */}
            <div className="hidden md:block relative h-full">
                <img
            src=".././src/assets/images/bg-sidebar-desktop.svg"
            alt="sidebar"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
            <ul className="absolute top-6 left-6 space-y-4">
            {steps.map(({ number, step, label }) => (
                <li key={number} className="flex items-center gap-4 font-Ubuntu">
                <button
                    className={`w-[30px] h-[30px] rounded-full border flex items-center justify-center text-sm transition
                    ${
                        currPage === number
                        ? "bg-[hsl(228,100%,84%)] text-black border-[hsl(228,100%,84%)]"
                        : "text-[hsl(228,100%,84%)] border-[hsl(228,100%,84%)]"
                    }`}
                >
                    {number}
                </button>
                <div className="leading-tight">
                    <span className="block text-[10px] tracking-[2px] text-[hsl(228,90%,84%)]">
                    {step}
                    </span>
                    <span className="block text-[hsl(228,56%,95%)] font-bold tracking-[1px]">
                    {label}
                    </span>
                </div>
                </li>
            ))}
            </ul>
            </div>

        {/* sidbar ka mobile view */}
        <div className="md:hidden relative h-[180px] -mx-4">
            <img
            src=".././src/assets/images/bg-sidebar-mobile.svg"
            alt="sidebar"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <ul className="absolute inset-x-0 top-10 flex justify-center gap-4">
            {steps.map(({ number }) => (
                <li key={number}>
                <button
                    className={`w-[35px] h-[35px] rounded-full border flex items-center justify-center text-sm transition
                    ${
                        currPage === number
                        ? "bg-[hsl(228,100%,84%)] text-black border-[hsl(228,100%,84%)]"
                        : "text-[hsl(228,100%,84%)] border-[hsl(228,100%,84%)]"
                    }`}
                >
                    {number}
                </button>
                </li>
            ))}
            </ul>
        </div>

        </aside>

        </>
    )
    }