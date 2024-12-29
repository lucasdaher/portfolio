import { useLanguage } from "@/hooks/useLanguage/useLanguage";

export function InteractiveSidebar() {
  const { messages } = useLanguage();
  return (
    <aside className="flex flex-col justify-center items-start gap-2 w-1/2">
      <span className="font-normal tracking-tight text-3xl">
        {messages.titles.sections.experiences.title}
      </span>
    </aside>
  );
}
