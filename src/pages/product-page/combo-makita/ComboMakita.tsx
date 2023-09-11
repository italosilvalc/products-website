import Presentation from "./components/Presentation";
import Pricing from "./components/Pricing";

export default function ComboMakita() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl flex-row md:flex min-h-screen">
        <Presentation />
        <Pricing />
      </div>
    </div>
  );
}
