import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider className="flex flex-col min-h-dvh lg:justify-center">{children}</NextUIProvider>;
}
