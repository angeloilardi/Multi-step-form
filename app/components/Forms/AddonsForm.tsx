"use client";

import { Formik, Form, useField, useFormikContext } from "formik";
import Image from "next/image";

type InputProps = {
  label: string;
  name: string;
  [x: string]: any;
  isChecked: boolean;
};

const options = [
  {
    value: "online",
    label: "Online service",
    description: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    value: "storage",
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    value: "customize",
    label: "Customizable Profile",
    description: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];

const CheckboxInput = ({
  label,
  price,
  description,
  isChecked,
  ...props
}: InputProps) => {
  const [field] = useField(props);
  return (
    <>
      <label
        className={`border-1 ${
          isChecked ? `border-purplish-blue bg-alabaster` : `border-light-gray`
        } rounded-md p-4 flex items-center text-marine-blue font-[500]`}
      >
        <input type="checkbox" {...field} {...props} className="w-4 h-4 mr-4" />
        <div className="flex flex-col">
          {label}
          <span className="text-light-gray font-normal">{description}</span>
        </div>
        <div className="ml-auto text-purplish-blue font-normal">+${price}</div>
      </label>
    </>
  );
};

type FormValues = {
  plan: string;
  toggle: boolean;
  checked: [];
};

export default function AddonsForm() {
  const { values } = useFormikContext<FormValues>();
  const {checked}:{checked:string[]} = values
  return (
    <>
            <div className="flex flex-col gap-3">
              {options.map(({ label, value, description, monthly, yearly }:{label:string, value: string, description:string, monthly: number, yearly: number }) => {
                return (
                  <CheckboxInput
                    label={label}
                    value={value}
                    name="checked"
                    key={value}
                    description={description}
                    isChecked={checked.includes(value)}
                    price={values.toggle ? `${yearly}/yr` : `${monthly}/mo`}
                    checked={checked.includes(value)?true:false}
                  />
                );
              })}
            </div>
    </>
  );
}
