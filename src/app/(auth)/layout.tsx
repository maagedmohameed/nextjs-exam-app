import Overlay from "./_components/overlay-form";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-screen">
      {/* Overlay  */}
      <section className="flex-1">
        <Overlay />
      </section>
      {/* Panel  */}
      <section className="flex flex-1 flex-col items-center justify-center">
        {children}
      </section>
    </section>
  );
}
