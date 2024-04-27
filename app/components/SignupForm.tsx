import { useRef, useState } from "react";
import TopBar from "./TopBar";
import Card from "./Card";
import Recap from "./Recap";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import PersonalForm from "./Forms/PersonalForm";
import BottomBar from "./BottomBar";
import PlanSelectionForm from "./Forms/PlanSelectionForm";
import AddonsForm from "./Forms/AddonsForm";
import plans from "./../utils/data";
import OrderSuccess from "./OrderSuccess";
// import {
//   useWindowWidth
// } from "@react-hook/window-size";

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
  {
    order: 5,
    name: "Thank you!",
    description:
      "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
  },
];

export default function SignupForm() {
  function renderForm(step: number) {
    switch (step) {
      case 0:
        return <PersonalForm />;
      case 1:
        return <PlanSelectionForm />;
      case 2:
        return <AddonsForm />;
      case 3:
        return <Recap handleChangePlan={handleChangePlan} />;
      default:
        break;
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChangePlan = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (values, actions) => {
    if (isFinalStep) {
      setCurrentStep(currentStep + 1);
      console.log("what is going on");
      console.log(values);
    } else setCurrentStep(currentStep + 1);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const isFinalStep = currentStep === steps.length - 2;
  const orderSuccess = currentStep === steps.length -1;
  const formik = useRef(null);

  return (
    <>
      <TopBar currentStep={currentStep} />
      <>
        <Card
          currentStep={currentStep}
          title={steps[currentStep].name}
          description={steps[currentStep].description}
          orderSuccess={orderSuccess}
        >
          <Formik
            innerRef={formik}
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
              plan: "arcade",
              toggle: false,
              checked: [],
            }}
            // validationSchema={Yup.object({
            //   name: Yup.string().required("This field is required"),
            //   email: Yup.string()
            //     .email("Invalid email addresss")
            //     .required("This field is required"),
            //   phoneNumber: Yup.string()
            //     .required("This field is required"),
            //   plan: Yup.string(),
            //   toggle: Yup.boolean(),
            //   checked: Yup.array(),
            // })}
            // onSubmit={async (values) => {
            //   await new Promise((r) => setTimeout(r, 500));
            //   alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Form className="flex flex-col">
                {renderForm(currentStep)}
                {/* <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-6 h-4 bg-zinc-50 p-6"
                  >
                    sub
                  </button> */}
              </Form>
            )}
          </Formik>
        </Card>
        <BottomBar
          // handleSubmit={handleSubmit}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          currentStep={currentStep}
          isFinalStep={isFinalStep}
        ></BottomBar>
      </>
    </>
  );
}
