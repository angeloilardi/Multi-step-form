import Image from "next/image"

export default function OrderSuccess() {
    return (
      <>

          <Image src="./images/icon-thank-you.svg" alt="" width={56} height={56} className="mb-6"></Image>
          <h1 className="font-bold text-2xl text-marine-blue">Thank you!</h1>
          <h2 className="py-5 text-cool-gray">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </h2>

      </>
    );
}