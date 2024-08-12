import MarqueeContent from "./MarqueeContent";

interface DemonstrationProps {
  id?: string;
}

/**
 * Renders a demonstration section.
 *
 * @param {DemonstrationProps} props - The component props.
 * @param {string} props.id - The ID of the section.
 * @returns {JSX.Element} The rendered demonstration section.
 */

export default function Demonstration({ id }: DemonstrationProps) {
  return (
    <section className="w-full mt-16" id={id}>
      <div className="w-full">
        <MarqueeContent />
      </div>
    </section>
  );
}
