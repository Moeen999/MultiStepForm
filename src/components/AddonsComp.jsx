import { useState } from "react";

export const AddOns = ({ billing, onNext, onBack, initial }) => {
  const [selected, setSelected] = useState(initial?.map((x) => x.id) || []);

  const list = {
    monthly: [
      {
        id: "online",
        name: "Online service",
        desc: "Access to multiplayer games",
        price: 1,
        suffix: "mo",
      },
      {
        id: "storage",
        name: "Larger storage",
        desc: "Extra 1TB of cloud save",
        price: 2,
        suffix: "mo",
      },
      {
        id: "profile",
        name: "Customizable Profile",
        desc: "Custom theme on your profile",
        price: 2,
        suffix: "mo",
      },
    ],
    yearly: [
      {
        id: "online",
        name: "Online service",
        desc: "Access to multiplayer games",
        price: 10,
        suffix: "yr",
      },
      {
        id: "storage",
        name: "Larger storage",
        desc: "Extra 1TB of cloud save",
        price: 20,
        suffix: "yr",
      },
      {
        id: "profile",
        name: "Customizable Profile",
        desc: "Custom theme on your profile",
        price: 20,
        suffix: "yr",
      },
    ],
  }[billing];

  const toggle = (id) => {
    setSelected((p) =>
      p.includes(id) ? p.filter((x) => x !== id) : [...p, id]
    );
  };
  const done = () => {
    onNext(list.filter((x) => selected.includes(x.id)));
  };

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold text-[hsl(213,96%,18%)]">
        Pick add-ons
      </h1>
      <p className="text-[hsl(231,11%,63%)] mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-6 space-y-3">
        {list.map((a) => {
          const active = selected.includes(a.id);
          return (
            <label
              key={a.id}
              className={`w-full border rounded-lg p-3 flex items-center justify-between gap-4 cursor-pointer transition
                ${active ? "border-[hsl(243,100%,62%)] bg-[hsl(231,100%,99%)]" : "border-[hsl(229,24%,87%)] hover:border-[hsl(243,100%,62%)]"}`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggle(a.id)}
                  className="w-4 h-4 accent-[hsl(243,100%,62%)]"
                />
                <div>
                  <div className="font-bold text-[hsl(213,96%,18%)]">{a.name}</div>
                  <div className="text-[hsl(231,11%,63%)] text-sm">{a.desc}</div>
                </div>
              </div>
              <div className="text-[hsl(243,100%,62%)] text-sm">
                +${a.price}/{a.suffix}
              </div>
            </label>
          );
        })}
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="text-[hsl(231,11%,63%)] hover:text-[hsl(213,96%,18%)]">
          Go Back
        </button>
        <button
          onClick={done}
          className="bg-[hsl(213,96%,18%)] hover:bg-[hsl(213,96%,22%)] text-white px-5 py-2 rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  ); 
};
