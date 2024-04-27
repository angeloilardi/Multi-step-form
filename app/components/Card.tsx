import Sidebar from "./Sidebar";
import Image from "next/image";

export default function Card({
  children,
  title,
  description,
  currentStep,
  orderSuccess,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  description: string;
  currentStep: number;
  orderSuccess: boolean;
}>) {
  return (
    <>
      <div className="bg-white rounded-md max-w-[92%] lg:w-[940px] mx-auto px-6 py-9 flex flex-col lg:p-4 lg:flex-row">
        <Sidebar currentStep={currentStep} />
        <div
          className={`lg:px-24 lg:mt-10 w-full flex flex-col ${orderSuccess && 'items-center justify-center mt-0'}`}
        >
          {orderSuccess && (
            <Image
              src="./images/icon-thank-you.svg"
              alt=""
              width={56}
              height={56}
              className="mb-6 self-center"
            ></Image>
          )}
          <h1 className="font-bold text-2xl text-marine-blue">{title}</h1>
          <h2 className="py-5 text-cool-gray">{description}</h2>
          {children}
        </div>
      </div>
    </>
  );
}
