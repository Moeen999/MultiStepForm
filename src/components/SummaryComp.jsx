export const Summary = ({  plan, addons, onBack, onConfirm }) => {
  const basePlan =
    plan.billing === "monthly"
      ? { arcade: 9, advanced: 12, pro: 15 }[plan.plan]
      : { arcade: 90, advanced: 120, pro: 150 }[plan.plan];
  const addSum = addons.reduce((s, a) => s + a.price, 0);
  const total = basePlan + addSum;
  const suffix = plan.billing === "monthly" ? "mo" : "yr";
  const label = {
    arcade: "Arcade",
    advanced: "Advanced",
    pro: "Pro",
  }[plan.plan];

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-Ubuntu-Bold font-bold text-[hsl(213,96%,18%)]">
        Finishing Up
      </h1>
      <p className="text-[hsl(231,11%,63%)] mt-2">
        Double-check everything looks OK before confirming.
      </p>
      <div className="mt-6 bg-[hsl(217,100%,97%)] rounded-lg p-4">
        <div className="flex items-center justify-between pb-4 border-b border-[hsl(229,24%,87%)]">
          <div>
            <div className="font-bold text-[hsl(213,96%,18%)]">
              {label} ({plan.billing})
            </div>
            <button
              onClick={onBack}
              type="button"
              className="text-[hsl(231,11%,63%)] underline text-sm"
            >
              Change
            </button>
          </div>
          <div className="font-bold text-[hsl(213,96%,18%)]">
            ${basePlan}/{suffix}
          </div>
        </div>

        {addons.length > 0 && (
          <div className="pt-4 space-y-2">
            {addons.map((a) => (
              <div key={a.id} className="flex justify-between text-sm">
                <span className="text-[hsl(231,11%,63%)]">{a.name}</span>
                <span className="text-[hsl(213,96%,18%)]">
                  +${a.price}/{suffix}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center px-2 mt-6">
        <span className="text-[hsl(231,11%,63%)]">
          Total (per {plan.billing === "monthly" ? "month" : "year"})
        </span>
        <span className="text-[hsl(243,100%,62%)] font-bold text-lg">
          ${total}/{suffix}
        </span>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="text-[hsl(231,11%,63%)] hover:text-[hsl(213,96%,18%)]"
        >
          Go Back
        </button>
        <button onClick={onConfirm} className="bg-[hsl(243,100%,62%)]  hover:brightness-95 text-white px-5 py-2 rounded-md">Confirm</button>
      </div>
    </div>
  );
};
