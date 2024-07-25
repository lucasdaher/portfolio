import MarqueeContent from "./MarqueeContent";

interface DemonstrationProps {
  isDark: boolean;
}

export default function Demonstration({ isDark }: DemonstrationProps) {
  return (
    <section className="w-full mt-12">
      <div className="w-full">
        <MarqueeContent isDark={isDark} />
      </div>
    </section>
  );
}
