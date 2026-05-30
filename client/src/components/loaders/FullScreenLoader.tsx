import PizzaLoader from "./PizzaLoader";

interface IProps {
    isRendered: boolean;
    duration: number;
}

export default function FullScreenLoader({ isRendered, duration }: IProps) {
  if (!isRendered) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center
                 bg-secondary/40 backdrop-blur-md
                 text-white text-2xl font-semibold z-index-500"
      style={{ animationDuration: `${duration}ms` }}
    >
      <div className="flex flex-col items-center">
      <PizzaLoader />
      <p className="p-5">Please wait</p>
      </div>
</div>
  );
}