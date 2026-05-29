import { createContext, useContext, useState } from "react";

interface LoaderContextValue {
  show: (duration?: number) => void;
  hide: () => void;
  isVisible: boolean;
  duration: number;
}

const LoaderContext = createContext<LoaderContextValue | null>(null);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState(500);

  const show = (d?: number) => {
    if (d) setDuration(d);
    setIsVisible(true);
  };

  const hide = () => setIsVisible(false);

  return (
    <LoaderContext.Provider value={{ show, hide, isVisible, duration }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used inside LoaderProvider");
  return ctx;
}