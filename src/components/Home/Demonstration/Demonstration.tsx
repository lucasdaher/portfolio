import MarqueeContent from "./MarqueeContent";

interface DemonstrationProps {
  isDark: boolean;
  id?: string;
}

export default function Demonstration({ isDark, id }: DemonstrationProps) {
  return (
    <section className="w-full mt-12" id={id}>
      <div className="w-full">
        <MarqueeContent isDark={isDark} />
      </div>
    </section>
  );
}
