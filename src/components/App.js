import React from "react";
import Navbar from "./Navbar";

import Trade from "./Trade";
import TradeTable from "./TradeTable";
import Footer from "./Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <Trade />
      <TradeTable />
      <Footer />
    </div>
  );
}
