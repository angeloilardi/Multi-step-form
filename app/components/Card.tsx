export default function Card({
  children,
  title,
  description,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  description: string;
}>) {
  return (
    <>
      <div className="bg-white rounded-md max-w-[92%] mx-auto px-6 py-9">
        <h1 className="font-bold text-2xl text-marine-blue">{title}</h1>
        <h2 className="py-5 text-cool-gray">{description}</h2>
        {children}
      </div>
    </>
  )
}
