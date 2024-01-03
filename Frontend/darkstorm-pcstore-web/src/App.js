import "./App.css";
import { DetailPage } from "./Pages/DetailPage";
import { LandingPage } from "./Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoFOundPage } from "./Pages/NoFoundPage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import Login from "./Pages/SignIn";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import FogetPassUser from "./Pages/FogetPassUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="cart-checkout" element={<CheckoutPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgetpass" element={<FogetPassUser />} />

          <Route path="*" element={<NoFOundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
