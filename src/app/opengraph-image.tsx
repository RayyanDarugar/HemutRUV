import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Invest in Hemut";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/hemut-logo-v2.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="Hemut Logo"
          style={{ width: "600px", objectFit: "contain" }}
        />
        <div
          style={{
            color: "#a3a2a2",
            fontSize: "28px",
            fontFamily: "serif",
            letterSpacing: "0.05em",
          }}
        >
          Friends &amp; Family Round
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
