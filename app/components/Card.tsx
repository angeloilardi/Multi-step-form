import Sidebar from "./Sidebar";

export default function Card({
  children,
  title,
  description,
  currentStep,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  description: string;
  currentStep:number
}>) {
  return (
    <>
      <div className="bg-white rounded-md max-w-[92%] lg:w-[940px] mx-auto px-6 py-9 lg:flex lg:p-4">
        <Sidebar currentStep={currentStep} />
        <div className="lg:px-24 lg:mt-10 w-full">
          <h1 className="font-bold text-2xl text-marine-blue">{title}</h1>
          <h2 className="py-5 text-cool-gray">{description}</h2>
          {children}
                </div>
        </div>
    </>
  );
}
