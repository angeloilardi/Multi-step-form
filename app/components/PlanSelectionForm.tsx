"use client";

import { Formik, Form, useField, withFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Switch } from "@nextui-org/switch";
import { cn } from "@nextui-org/system";

const options = [
  {
    value: "arcade",
    label: "Arcade",
    icon: "/images/icon-arcade.svg",
    monthly: "9",
    yearly: 90,
  },
  {
    value: "advanced",
    label: "Advanced",
    icon: "/images/icon-advanced.svg",
    monthly: 12,
    yearly: 120,
  },
  {
    value: "pro",
    label: "Pro",
    icon: "/images/icon-pro.svg",
    monthly: 15,
    yearly: 150,
  },
];


export default function PlanSelectionForm() {
  const [toggle, setToggle] = useState(false);

  const RadioInput = ({ label, icon, price, isSelected, ...props }) => {
    const [field] = useField(props);
    return (
      <>
        <div
          className={`border-3 border-${
            !isSelected ? `orange-700` : `marine-blue`
          } rounded-md p-4 flex items-center`}
        >
          <img src={icon} alt="" className="mr-4" />
          <input type="radio" {...field} {...props} hidden className="" />
          <div className="flex flex-col">
            <label
              htmlFor={props.id || props.name}
              className=" text-marine-blue font-[500]"
            >
              {label}
              <br />
            </label>
            <span className="text-light-gray">
              ${price}
              {!toggle ? `/mo` : `/yr`}
            </span>
            {toggle && <span>2 months free</span>}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Formik
        initialValues={{ plan: "arcade", toggle: false }}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        {({ values, handleChange }) => (
          <>
            <Form>
              <fieldset>
                <legend className="sr-only">Select a plan</legend>
                <div className="flex flex-col gap-3">
                  {options.map(
                    ({ label, value, icon, monthly, yearly }) => {
                      return (
                        <RadioInput
                          label={label}
                          value={value}
                          name="plan"
                          id={value}
                          key={value}
                          icon={icon}
                          price={!toggle ? monthly : yearly}
                          isSelected={values.plan === value}
                        />
                      );
                    }
                  )}
                </div>
              </fieldset>
              <div className="bg-magnolia rounded-md flex justify-center items-center py-3 mt-6">
                <label
                  htmlFor="toggle"
                  className={`${
                    !toggle ? "text-marine-blue" : "text-light-gray"
                  } font-semibold`}
                >
                  Monthly
                </label>
                <Switch
                  defaultSelected
                  size="sm"
                  isSelected={toggle}
                  onValueChange={setToggle}
                  onChange={handleChange}
                  name="toggle"
                  id="toggle"
                  classNames={{
                    base: cn(
                      "w-full bg-transparent items-center",
                      "justify-between cursor-pointer rounded-lg gap-2 p-2 border-transparent"
                    ),
                    wrapper:
                      "p-0 h-5 w-10 bg-marine-blue group-data-[selected=true]:bg-marine-blue mr-0",
                    thumb: cn(
                      "w-4 h-4 shadow-lg ml-0.5",

                      //selected
                      "group-data-[selected=true]:ml-5"
                      // pressed
                      // "group-data-[pressed=true]:w-5"
                    ),
                  }}
                />
                <label
                  htmlFor="toggle"
                  className={`${
                    toggle ? "text-marine-blue" : "text-light-gray"
                  } font-semibold`}
                >
                  Yearly
                </label>
              </div>
              <button
                type="submit"
                className="bg-marine-blue inline-block text-white rounded-md absolute bottom-0 right-[4%] p-3 my-4 z-20"
              >
                Next Step
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
