import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN || (typeof process !== 'undefined' ? process.env.MICROCMS_SERVICE_DOMAIN : '');
const apiKey = import.meta.env.MICROCMS_API_KEY || (typeof process !== 'undefined' ? process.env.MICROCMS_API_KEY : '');

// ★Cloudflareのビルドログで確認するための調査コード
console.log("========================================");
console.log("[調査] serviceDomain は読み込めているか？ :", !!serviceDomain);
console.log("[調査] apiKey は読み込めているか？ :", !!apiKey);
console.log("========================================");

if (!serviceDomain || !apiKey) {
  throw new Error("🚨【ストップ】環境変数が空っぽです！Cloudflareの設定画面を確認してください。");
}

export const client = createClient({
  serviceDomain: serviceDomain as string,
  apiKey: apiKey as string,
});