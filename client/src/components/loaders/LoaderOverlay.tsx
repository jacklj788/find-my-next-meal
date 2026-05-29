import { useLoader } from "../../contexts/LoaderContext";
import FullScreenLoader from "./FullScreenLoader";

export function LoaderOverlay() {
  const { isVisible, duration } = useLoader();
  return <FullScreenLoader isRendered={isVisible} duration={duration} />;
}