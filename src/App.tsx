import { useState } from "react";
import iconCheck from "./assets/icon-check.svg";

export function App() {
  const [billValue, setBillValue] = useState(0);
  const [isMonthlyBilling, setIsMonthlyBilling] = useState(false);

  return (
    <div className="h-screen bg-very-pale-blue">
      <div className="bg-pattern bg-no-repeat bg-[length:100%_auto] w-full h-full flex flex-col items-center gap-10">
        <div className="bg-circles bg-no-repeat bg-center flex flex-col gap-3 justify-center mt-12 h-48">
          <h1 className="mx-auto text-3xl font-bold text-dark-desaturated-blue">
            Simple, traffic-based pricing
          </h1>
          <p className="text-center text-15 font-semibold text-grayish-blue fs-15">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg">
          <div className="py-10 px-12 flex flex-col gap-8">
            <div className="flex items-center justify-between w-[500px]">
              <span className="text-grayish-blue uppercase tracking-widest font-bold text-15">100k pageviews</span>
              <span className="text-grayish-blue font-semibold">
                <strong className="text-dark-desaturated-blue text-3xl font-bold mr-1">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(billValue)}
                </strong>
                / month
              </span>
            </div>

            <div className="relative">
              <input
                className=" absolute w-full h-3 bg-light-grayish-blue rounded-lg appearance-none cursor-pointer"
                onChange={(e) => setBillValue(Number(e.target.value))}
                value={billValue}
                min={0}
                max={32}
                type="range"
                name=""
                id="bill-value"
              />
            </div>


            <div className="flex items-center gap-4 justify-end">
              <div className="flex items-center gap-2">
                <span className="text-15 text-grayish-blue font-semibold">Monthly billing</span>
                <div className="flex relative">
                  <input
                    className="[all:unset]"
                    type="checkbox"
                    name="monthly-biling"
                    id="monthly-biling"
                    onChange={() => setIsMonthlyBilling(!isMonthlyBilling)}
                  />
                  <label
                    htmlFor="monthly-biling"
                    className={`bg-medium-grayish-blue w-12 h-6 rounded-xl after:content-[''] cursor-pointer hover:bg-strong-cyan focus:border focus:border-grayish-blue 
                    after:w-4 after:h-4 after:rounded-full after:bg-white after:absolute after:-left-[-4px] after:top-1/2 after:-translate-y-1/2 after:transition-all 
                    ${isMonthlyBilling
                        ? "bg-strong-cyan after:translate-x-6"
                        : ""
                      }
                  `}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-15 text-grayish-blue font-semibold">Yearly Billing</span>
                <span className="bg-light-grayish-red text-light-red font-bod py-1 px-2 rounded-2xl text-xs">25% discount</span>
              </div>
            </div>
          </div>

          <div className="border border-light-grayish-blue border-solid" />

          <div className="flex items-center justify-between p-8">
            <div className="flex flex-col gap-2 text-15">
              <div className="flex items-center gap-4">
                <img src={iconCheck} alt="" className="w-3" />
                <span className="text-grayish-blue font-semibold">Unlimited websites</span>
              </div>
              <div className="flex items-center gap-4">
                <img src={iconCheck} alt="" className="w-3" />
                <span className="text-grayish-blue font-semibold">100% data ownership</span>
              </div>
              <div className="flex items-center gap-4">
                <img src={iconCheck} alt="" className="w-3" />
                <span className="text-grayish-blue font-semibold">Email reports</span>
              </div>
            </div>

            <button className="bg-dark-desaturated-blue px-10 py-2 text-white rounded-full hover:brightness-125">Start my trial</button>
          </div>
        </div>
      </div>
    </div>
  )
}