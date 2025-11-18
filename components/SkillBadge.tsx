"use client";
import React from "react";

export default function SkillBadge({ name, icon }: { name: string; icon?: string }) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const iconName = icon ?? slug;

  return (
    <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-gray-50 border border-gray-100">
      <img
        src={`/icons/${iconName}.svg`}
        alt={name}
        className="w-8 h-8 rounded-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="text-sm text-gray-700">{name}</div>
    </div>
  );
}
