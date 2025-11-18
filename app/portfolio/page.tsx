import React, { Suspense } from "react";
import PortfolioDetails from "./PortfolioDetails";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioDetails />
      <Footer />
    </Suspense>
  );
}
