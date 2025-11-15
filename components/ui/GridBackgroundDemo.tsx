import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[80px_80px]",
          "bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient mask for fade effect */}
      <div className="pointer-events-none absolute inset-0 bg-white mask-[radial-gradient(ellipse_at_center,transparent_0%,white_70%)]"></div>
    </div>
  );
}
export default GridBackgroundDemo;