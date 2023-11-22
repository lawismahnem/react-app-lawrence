// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Product from "./pages/Product";
import thumbnailImg from "./assets/thumbnail.png";

function App() {
  return (
    <>
      <Header title="WEBROAD"></Header>
      <Product
        title="Complete Web Bundle"
        description="lorem empsum lorem empsum lorem empsum lorem empsum"
        images={[{ src: thumbnailImg, alt: "Thumbnail Image" }]}
        price={199.99}
      ></Product>
    </>
  );
}

export default App;
