import { Formik, Form, useField, withFormik } from "formik";
import * as Yup from "yup";

const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const TextInput = ({ label, ...props }) => {
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
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("This field is required"),
            email: Yup.string()
              .email("Invalid email addresss")
              .required("This field is required"),
            phoneNumber: Yup.string()
              .required("This field is required")
              .matches(phoneRegEx, "Phone number not valid"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise((r) => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form className="flex flex-col">
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
            <button
              type="submit"
              className="bg-marine-blue inline-block text-white rounded-md absolute bottom-0 right-[4%] p-3 my-4 z-20"
            >
              Next Step
            </button>
          </Form>
        </Formik>
      </>
    );
}



