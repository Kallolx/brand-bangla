import { Routes, Route } from "react-router-dom";
import DivisionPage from "./pages/division/[name]";
import Landing from "./components/app/landing/Landing";
import { DivisionProvider } from "@/context/DivisionContext";

function App() {
  return (
    <DivisionProvider>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/division/:name" element={<DivisionPage />} />
        </Routes>
      </div>
    </DivisionProvider>
  );
}

export default App;
