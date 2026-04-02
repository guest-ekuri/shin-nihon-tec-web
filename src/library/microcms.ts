import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type Event = {
  id: string;
  event_title: string;
  english_title: string;
  date: string;
  tags: string;
  content: string;
  photo_gallery: {
    fieldId: "photo_item";
    image: { url: string; width: number; height: number };
    photo_title: string;
  }[];
};