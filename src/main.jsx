import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import User from "./pages/users.jsx";
import Details from "./pages/details.jsx";
import Effect from "./pages/Effect.jsx";
import Back from "./back.jsx";
import State from "./pages/state.jsx"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<User />} />
      <Route path="/Details" element={<Details />} />
      <Route path="/effect" element={<Effect />} />
      <Route path="/example" element={<Back />} />
      <Route path="/state" element={<State />} />
    </Routes>
  </BrowserRouter>
);