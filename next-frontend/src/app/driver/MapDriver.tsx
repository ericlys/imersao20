"use client";

import { useRef } from "react";
import { useMap } from "../../hooks/useMap";

export function MapDriver() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef);

  return <div className="w-full md:w-2/3 h-full" ref={mapContainerRef} />;
}
