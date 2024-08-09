interface CircleProps {}

export default function Circle({}: CircleProps) {
  return (
    <span
      className={`w-1 h-2 ml-2 bg-normal rounded-full font-sora font-bold text-xs px-1 text-white`}
    ></span>
  );
}
