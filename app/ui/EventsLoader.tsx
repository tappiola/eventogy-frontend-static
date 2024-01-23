import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import React from "react";

const EventsLoader = () => {
  return Array.from({ length: 20 }, (_, index) => (
    <Card key={index} className="border-blue-500">
      <div className="relative w-full mb-2" style={{ aspectRatio: 16 / 9 }}>
        <Skeleton height="100%" />
      </div>
      <div className="flex-grow-1">
        <Skeleton className="mb-2" />
        <Skeleton className="mb-2" />
        <Skeleton className="mb-2" />
      </div>
      <div className="flex justify-content-between">
        <i className="pi pi-star" />
        <i className="pi pi-ellipsis-h" />
      </div>
    </Card>
  ));
};

export default EventsLoader;
