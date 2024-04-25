"use client";

import { Formik, Form, useField } from "formik";
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
    value: "arcade",
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
          <span className="text-light-gray">${description}</span>
        </div>
        <div className="ml-auto">+{price}</div>
      </label>
    </>
  );
};

export default function AddonsForm() {
  return (
    <>
      <Formik
        initialValues={{ checked: [] }}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <div className="flex flex-col gap-3">
              {options.map(({ label, value, description, monthly, yearly }) => {
                return (
                  <CheckboxInput
                    label={label}
                    value={value}
                    name="checked"
                    key={value}
                    description={description}
                    isChecked={values.checked.includes(value)}
                    price={monthly}
                  />
                );
              })}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
