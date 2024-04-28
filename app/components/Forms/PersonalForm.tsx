import { useField } from "formik";

type InputProps = {
  label: string;
  name: string;
  [x: string]: any;
};

const TextInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex items-center mt-4">
        <label
          htmlFor={props.id || props.name}
          className="text-sm mb-1 text-marine-blue"
        >
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="error text-sm text-red-500 font-bold ml-auto">
            {meta.error}
          </div>
        ) : null}
      </div>
      <input
        className={`rounded-md text-marine-blue border p-3 font-[500] ${
          meta.touched && meta.error ? `border-red-500` : ``
        } hover:border-purplish-blue`}
        {...field}
        {...props}
      />
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
