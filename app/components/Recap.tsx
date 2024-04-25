import { useFormikContext } from "formik";

import data from "./../utils/data";

export default function Recap() {
  const { values } = useFormikContext();
  const isYearly = values.toggle;
  const planPrice = isYearly
    ? data.plans[values.plan].yearly
    : data.plans[values.plan].monthly;

    const addonsPrice = values.checked.map(value => {
    {
      return isYearly
        ? data.addons[value].yearly
        : data.addons[value].monthly
    }
    })
    console.log(addonsPrice);

  return (
    <>
      <div className="bg-alabaster flex flex-col px-4 py-5 rounded-lg">
        <div className="flex">
          <div className="flex flex-col items-start">
            <p className="capitalize text-marine-blue">
              {values.plan} {isYearly ? `(Yearly)` : `(Monthly)`}
            </p>
            <button className="underline text-cool-gray">Change</button>
          </div>
          <p className="text-marine-blue font-[500] ml-auto mt-4">
            {`$${planPrice}/${isYearly ? "yr" : "mo"}`}
          </p>
        </div>
        {values.checked.map((value) => {
          return (
            <>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-cool-gray">{data.addons[value].label}</p>
                <p>
                  {isYearly
                    ? `+$${data.addons[value].yearly}/yr`
                    : `+$${data.addons[value].monthly}/mo`}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex px-4 py-7 justify-between">
        <p className="text-cool-gray">{`Total (per ${
          isYearly ? "year" : "month"
        })`}</p>
              <p className="text-purplish-blue font-[500]">{`+$${planPrice + addonsPrice.reduce((a, b) => a + b)}/${isYearly ? 'yr' : 'mo'}`}</p>
      </div>
    </>
  );
}
