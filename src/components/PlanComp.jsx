import { useState } from "react";

export const Plan = ({ onNext, onBack, initial }) => {
  const [billing, setBilling] = useState(initial?.billing || "monthly");
  const [plan, setPlan] = useState(initial?.plan || "arcade");
  
  const prices = {
    monthly: { arcade: 9, advanced: 12, pro: 15 },
    yearly: { arcade: 90, advanced: 120, pro: 150 },
  };
  //todo:  plan k cards 
  const PlanCard = ({ id, label, icon }) => {
    const active = plan === id;
    return (
      <button
        type="button"
        onClick={() => setPlan(id)}
        className={`w-full border rounded-lg p-3 md:p-4 text-left flex md:flex-col gap-3 md:gap-6 transition
          ${
            active
              ? "border-[hsl(243,100%,62%)] bg-[hsl(231,100%,99%)]"
              : "border-[hsl(229,24%,87%)] hover:border-[hsl(243,100%,62%)]"
          }`}
      >
        <div className="w-10 h-10 rounded-md bg-[hsl(206,94%,87%)] flex items-center justify-center">
          <span className="text-[hsl(213,96%,18%)]">{icon}</span>
        </div>
        <div>
          <div className="font-bold text-[hsl(213,96%,18%)] capitalize">
            {label}
          </div>
          <div className="text-[hsl(231,11%,63%)] text-sm">
            ${prices[billing][id]}/{billing === "monthly" ? "mo" : "yr"}
          </div>
          {billing === "yearly" && (
            <div className="text-[hsl(213,96%,18%)] text-xs mt-1">
              2 months free
            </div>
          )}
        </div>
      </button>
    );
  };

  //todo: asli parent component jismin saray cards display hongy
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold text-[hsl(213,96%,18%)]">
        Select your plan
      </h1>
      <p className="text-[hsl(231,11%,63%)] mt-2">
        You have the option of monthly or yearly billing.
      </p>

      {/* Mobile: stacked; Desktop: 3 columns */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <PlanCard id="arcade" label="Arcade" icon="🕹️" />
        <PlanCard id="advanced" label="Advanced" icon="🎮" />
        <PlanCard id="pro" label="Pro" icon="🎮" />
      </div>

      {/* Toggle wala check button agr to monthly hoga to ye  */}
      <div className="mt-6 bg-[hsl(231,100%,99%)] rounded-md p-3 flex items-center justify-center gap-6">
        <span
          className={`text-sm ${
            billing === "monthly"
              ? "text-[hsl(213,96%,18%)] font-bold"
              : "text-[hsl(231,11%,63%)]"
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() =>
            setBilling(billing === "monthly" ? "yearly" : "monthly")
          }
          className="w-12 h-6 rounded-full bg-[hsl(213,96%,18%)] relative"
        >
          <span
            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
              billing === "monthly" ? "left-1" : "left-7"
            }`}
          />
        </button>
        <span
          className={`text-sm ${
            billing === "yearly"
              ? "text-[hsl(213,96%,18%)] font-bold"
              : "text-[hsl(231,11%,63%)]"
          }`}
        >
          Yearly
        </span>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="text-[hsl(231,11%,63%)] hover:text-[hsl(213,96%,18%)]"
        >
          Go Back
        </button>
        <button
          onClick={() => onNext({ plan, billing })}
          className="bg-[hsl(213,96%,18%)] hover:bg-[hsl(213,96%,22%)] text-white px-5 py-2 rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
