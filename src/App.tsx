import { useState } from "react";
import "./App.css";
import LandingPage from "./Component/LandingPage";
import ProductSelectionPage from "./Component/ProductSelectionPage";

export default function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <ProductSelectionPage />
  ) : (
    <LandingPage onGetStarted={() => setStarted(true)} />
  );
}
