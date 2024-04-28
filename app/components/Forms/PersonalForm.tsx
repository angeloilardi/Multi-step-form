import { useField } from "formik";

type InputProps = {
  label: string;
  name: string;
  [x: string]: any;
};

const TextInput = ({ label, ...props }:InputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="text-sm mb-1 mt-4 text-marine-blue"
      >
        {label}
      </label>
      <input
        className="rounded-md text-blue-500 border p-3 placeholder:font-500"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm">{meta.error}</div>
      ) : null}
    </>
  );
};


export default function PersonalForm() {
    return (
      <>
            <TextInput
              label="Name"
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
            />
            <TextInput
              label="Email Address"
              type="text"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
            />
            <TextInput
              label="Phone Number"
              type="text"
              name="phone"
              placeholder="e.g. +1 234 567 890"
            />
      </>
    );
}



