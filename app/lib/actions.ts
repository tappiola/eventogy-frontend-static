import axios from "axios";

export interface EventData {
  id: string;
  name: string;
  slug: string;
  status: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  data: {
    scheduled_dates: string[];
    timezone: string;
    location_long: number;
    location_lat: number;
  };
}

export interface EventResponse {
  success: boolean;
  code: number;
  message: string;
  pagination: {
    perPage: number;
    currentPage: number;
    lastPage: number;
    total: number;
  };
  data: EventData[];
}

export const getEvents = async () => {
  // Uncomment to simulate delay
  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(5000);

  const res = await axios.get<EventResponse>(
    "https://www.eventogy.com/api/events.json",
  );

  return res.data;
};
