import React from "react";
import "../styles/_discover-skeleton.scss";

export default function DiscoverSkeleton() {
  return (
    <div className="discover-skeleton animate__animated animate__fadeIn">
      <div className="discover-skeleton__art" />
      <p className="discover-skeleton__title"></p>
    </div>
  );
}
