import ReactQueryProvider from "./components/react-query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </ReactQueryProvider>
  );
}
