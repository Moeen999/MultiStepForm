import { useState } from "react";
import { SideBar } from "./SidebarComp";
import { Info } from "./InfoComp";
import { Plan } from "./PlanComp";
import { AddOns } from "./AddOnsComp";
import { Summary } from "./SummaryComp";
import { Thank } from "./ThanksComp";

export const MultiStepForm = () => {
  const [pgNum, setPgnum] = useState(1);
  const [info, setInfo] = useState(null);
  const [plan, setPlan] = useState(null);
  const [addOns, setAddons] = useState([]);
  const nextPage = () => setPgnum((prev) => (prev < 5 ? prev + 1 : prev));
  const prevPage = () => setPgnum((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <>
      <div className="w-full max-w-[940px] px-4 py-6">
        {/* mobile view waali sidebar jo medium divice pr hide kr rha hn */}
        <div className="md:hidden">
          <SideBar currPage={pgNum} />
        </div>
        <section className="relative -mt-16 md:mt-0 bg-transparent md:bg-white md:rounded-xl md:p-4 md:flex md:gap-6 md:shadow-sm overflow-hidden">
          <div className="hidden md:block">
            <SideBar currPage={pgNum} />
          </div>
          {/* right side waly pages jo change hongy */}
          <div className="relative z-10 md:flex-1">
            {pgNum === 1 && (
              <Info
              defaultValues={info}
                onNext={(data) => {
                  setInfo(data);
                  nextPage();
                }}
              />
            )}
            {pgNum === 2 && (
              <Plan
                initial={plan}
                onBack={prevPage}
                onNext={(data) => {
                  setPlan(data);
                  nextPage();
                }}
              />
            )}
             {pgNum === 3 && (
              <AddOns
                billing={plan?.billing || "monthly"}
                initial={addOns}
                onBack={prevPage}
                onNext={(data) => {
                  setAddons(data);
                  nextPage();
                }}
              />
            )}
            {pgNum === 4 && (
              <Summary
                info={info}
                plan={plan}
                addons={addOns}
                onBack={prevPage}
                onConfirm={nextPage}
              />
            )}
            {pgNum === 5 && <Thank />}  
          </div>
        </section>
      </div>
    </>
  );
};
