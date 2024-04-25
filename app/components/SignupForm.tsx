import { useState } from "react";
import TopBar from "./TopBar";
import Card from "./Card";
import Recap from './Recap'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import PersonalForm from "./Forms/PersonalForm";
import BottomBar from "./BottomBar";
import PlanSelectionForm from "./Forms/PlanSelectionForm";
import AddonsForm from "./Forms/AddonsForm";

const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const steps = [
  {
    order: 1,
    name: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    order: 2,
    name: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    order: 3,
    name: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    order: 4,
    name: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

function renderForm(step: number) {
  switch (step) {
    case 0:
      return <PersonalForm />;
    case 1:
      return <PlanSelectionForm />;
    case 2:
      return <AddonsForm />;
    case 3:
      return <Recap />;
    default:
      break;
  }
}

export default function SignupForm() {
  const handleSubmit = () => {
    setCurrentStep(currentStep + 1);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const isFinalStep = currentStep === steps.length - 1;
  return (
    <>
      <TopBar currentStep={currentStep} />
      <Card
        title={steps[currentStep].name}
        description={steps[currentStep].description}
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            plan: "arcade",
            toggle: false,
            checked: [],
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
              console.log(values.checked);
          }}
              >
                  {({ values, handleChange }) => (
                      <><Form className="flex flex-col">
                          {renderForm(currentStep)}
                      </Form>
                          <div>{values.checked}</div></>
                  )}
        </Formik>
      </Card>
      <BottomBar handleSubmit={handleSubmit}></BottomBar>
    </>
  );
}
