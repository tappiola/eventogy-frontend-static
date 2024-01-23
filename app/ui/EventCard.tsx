import { Card } from "primereact/card";
import Image from "next/image";
import { EventData } from "../lib/actions";
import { formatDateRange } from "../lib/helpers";
import React from "react";

const EventCard = ({
  event: {
    id,
    name,
    data: { scheduled_dates },
  },
}: {
  event: EventData;
}) => {
  return (
    <Card className="border-blue-500">
      <div className="relative w-full" style={{ aspectRatio: 16 / 9 }}>
        <Image
          src={`https://source.unsplash.com/featured/300x30${id}?q=80`}
          alt="Picture of the event"
          fill
          sizes="(max-width: 752px) 100vw, (max-width: 1076px) 50vw, (max-width: 1272px) 33vw"
          className="w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-grow-1">
        <h2 className="text-base font-semibold">{name}</h2>
        <p className="text-sm text-gray-400">
          {formatDateRange(scheduled_dates)}
        </p>
        <p className="text-sm">London</p>
      </div>
      <div className="flex justify-content-between">
        <i className="pi pi-star" />
        <i className="pi pi-ellipsis-h" />
      </div>
    </Card>
  );
};

export default EventCard;
