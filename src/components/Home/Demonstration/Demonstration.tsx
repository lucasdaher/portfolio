import MarqueeContent from "./MarqueeContent";

interface DemonstrationProps {
  id?: string;
}

export default function Demonstration({ id }: DemonstrationProps) {
  return (
    <section className="w-full mt-12" id={id}>
      <div className="w-full">
        <MarqueeContent />
      </div>
    </section>
  );
}
