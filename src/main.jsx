import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import User from "./pages/users/";
import Details from "./pages/details.jsx";
import Effect from "./pages/Effect.jsx";
import Back from "./back.jsx";
import State from "./pages/state.jsx"
import Product from "./pages/product/"
import Post from "./pages/posts.jsx";
import SingleProduct from "./pages/product/[id].jsx";
import SingleUser from "./pages/users/[id].jsx";


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
      <Route path="/product" element={<Product />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/users/:id" element={<SingleUser />} />
    </Routes>
  </BrowserRouter>
);