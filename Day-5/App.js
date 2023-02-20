import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// Header
//          Logo
//          Nav Item
//          Cart
// Body
//    - Search Bar
//    - Restaurant Cards (Multiple)
//          - Image - Name - Rating - Cuisines
// Footer

// Config Driven UI




const AppLayout = () => {
  return (
    <>
      <Header />
      <Body/>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing react element inside root.
root.render(<AppLayout />);
