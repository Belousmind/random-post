import Landing from "@pages/landing/landing";
import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />}/>
        <Route path="/landing" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
