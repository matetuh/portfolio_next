import React, { Suspense } from "react";
import PortfolioDetails from "./PortfolioDetails";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioDetails />
    </Suspense>
  );
}
