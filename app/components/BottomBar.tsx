'use client'

interface Props {
  currentStep: number;
  handleBack: () => void;
  handleSubmit: () => void;
  isFinalStep: boolean;
  orderSuccess: boolean;
}

export default function SubmitButton(props: Props){
const { currentStep, handleBack, isFinalStep, handleSubmit, orderSuccess } =
  props;
  return (
    <>
      {!orderSuccess && (
        <div className="w-full flex items-center justify-between mt-auto bg-white px-[4%] py-4 lg:hidden">
          {currentStep > 0 && <button onClick={handleBack}>Go back</button>}

          <button
            type="submit"
            className="bg-marine-blue inline-block text-white rounded-md p-3 ml-auto"
            onClick={handleSubmit}
          >
            {isFinalStep ? "Confirm" : `Next Step`}
          </button>
        </div>
      )}
    </>
  );
}