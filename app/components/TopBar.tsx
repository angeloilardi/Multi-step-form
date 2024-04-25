const steps = [
    {
        order: 1,
        name: "Personal info",
        description: "Please provide your name, email address, and phone number."
    },
     {
        order: 2,
        name: "Select your plan",
        description: "You have the option of monthly or yearly billing."
    },
      {
        order: 3,
        name: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience."
    },
       {
        order: 4,
        name: "Finishing up",
        description: "Double-check everything looks OK before confirming."
    }
]


export default function TopBar(props: {currentStep:number}) {
    console.log(props);
    return <div className="bg-transparent flex gap-4 justify-center items-center py-8">
        {
            steps.map(step => {
                return (
                  <><div
                        key={step.order}
                        className={`rounded-full w-8 h-8 border-2 text-center ${props.currentStep === step.order-1
                                ? `text-marine-blue bg-light-blue border-light-blue font-bold`
                                : `text-white border-white`}`}
                    >
                        {step.order}
                    </div>
                        {/* <p>{currentStep}</p> */}
                    </>
                );
            })
      }
  </div>;
}
