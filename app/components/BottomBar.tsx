'use client'
import Link from "next/link";
import { useRef } from "react";

export default function SubmitButton({handleSubmit}) {
// const formRef = useRef(null);
//   const handleSubmit = () => {
//     console.log(formRef?.current);
//     formRef?.current?.handleSubmit();
//   };
    return (
      <>
        <div className="w-full flex items-center justify-between mt-auto bg-white px-[4%] py-4">
          <Link href={""}>Go back</Link>
          <button
            type="submit"
            className="bg-marine-blue inline-block text-white rounded-md p-3"
            onClick={handleSubmit}
          >
            Next Step
          </button>
        </div>
      </>
    );
}