import Events from "./ui/Events";
import { Suspense } from "react";
import EventsLoader from "./ui/EventsLoader";

export default function Home() {
  return (
    <section>
      <div
        className="px-7 py-3 gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        <Suspense fallback={<EventsLoader />}>
          <Events />
        </Suspense>
      </div>
    </section>
  );
}
