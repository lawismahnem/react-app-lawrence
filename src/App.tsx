// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Product from "./pages/Product";
import thumbnailImg from "./assets/thumbnail.png";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Checkout from "./pages/Checkout";

function Layout() {
  return (
    <>
      <Header title="WEBROAD"></Header>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={
              <Product
                title="Complete Web Bundle"
                description="lorem empsum lorem empsum lorem empsum lorem empsum"
                images={[{ src: thumbnailImg, alt: "Thumbnail Image" }]}
                price={199.99}
              ></Product>
            }
          />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<div>Success</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
