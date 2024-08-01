import MarqueeContent from "./MarqueeContent";

import { useDarkMode } from "@/services/ThemeService";

interface DemonstrationProps {
  id?: string;
}

export default function Demonstration({ id }: DemonstrationProps) {
  const { dark } = useDarkMode();
  return (
    <section className="w-full mt-12" id={id}>
      <div className="w-full">
        <MarqueeContent />
      </div>
    </section>
  );
}
