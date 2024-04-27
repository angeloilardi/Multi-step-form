const steps = [
  {
    order: 1,
    title: "Your info",
    name: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    order: 2,
    title: "Select Plan",
    name: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    order: 3,
    title: "Add-ons",
    name: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    order: 4,
    title: "Summary",
    name: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

export default function Sidebar(props: { currentStep: number }) {
  return (
    <div className="bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat flex-col gap-7 py-9 px-7 rounded-lg hidden lg:flex min-w-[270px] h-[570px]">
      {steps.map((step) => {
        return (
          <>
            <div className="flex flex-col text-left">
              <div className="flex gap-5 items-center">
                <div
                  key={step.order}
                  className={`rounded-full w-8 h-8 border-2 text-center ${
                    props.currentStep === step.order - 1
                      ? `text-marine-blue bg-light-blue border-light-blue font-bold`
                      : `text-white border-white`
                  }`}
                >
                  {step.order}
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-cool-gray">STEP {step.order}</p>
                  <p className="text-white uppercase">{step.title}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
