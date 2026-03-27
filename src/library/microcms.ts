// src/library/microcms.ts
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

export const microcmsClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ★ 変更されたmicroCMSのスキーマに合わせて「型」を修正しました
export type Event = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  
  // ユーザー定義フィールド
  title: string;
  "title-en"?: string; // ※フィールドIDが「title-en」の場合
  date: string;
  category?: string;
  images?: { url: string; width: number; height: number }[]; // 複数画像なので配列（[]）になります
  text?: string;
};

// イベント一覧を取得する関数
export const getEvents = async (queries?: MicroCMSQueries) => {
  return await microcmsClient.getList<Event>({ endpoint: "events", queries });
};

// 特定のイベント（1件）を取得する関数
export const getEventDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await microcmsClient.getListDetail<Event>({
    endpoint: "events",
    contentId,
    queries,
  });
};