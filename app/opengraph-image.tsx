import { ImageResponse } from "next/og";

export const alt = "VisionXAI — Mind to Media";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFF7F2 0%, #FFE6D6 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, color: "#1A1A1A" }}>
          VISION<span style={{ color: "#A84200" }}>XAI</span>
        </div>
        <div style={{ fontSize: 34, color: "#4B4B4B", marginTop: 28 }}>
          We Turn Ideas Into Digital Experiences
        </div>
      </div>
    ),
    { ...size }
  );
}
