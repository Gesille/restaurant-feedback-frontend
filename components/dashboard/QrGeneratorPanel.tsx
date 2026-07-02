"use client";

import { RefreshIcon } from "@/icons/icons";
import { Restaurant } from "@/mockdata/restaurant";
import { ACCENT_SWATCHES } from "@/utils/theme";
import { QRCodeCanvas } from "qrcode.react";
import { useMemo, useRef, useState } from "react";


interface QrGeneratorPanelProps {
  restaurants: Restaurant[];
}

export function QrGeneratorPanel({ restaurants }: QrGeneratorPanelProps) {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    restaurants[0]?.id
  );
  const [menuUrl, setMenuUrl] = useState(restaurants[0]?.menuUrl ?? "");
  const [accentColor, setAccentColor] = useState(
    ACCENT_SWATCHES[0] ?? "#6C4DF4"
  );
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  const selectedRestaurant = useMemo(
    () => restaurants.find((r) => r.id === selectedId) ?? restaurants[0],
    [restaurants, selectedId]
  );

  function handleRestaurantChange(id: string) {
    const restaurant = restaurants.find((r) => r.id === id);
    if (!restaurant) return;
    setSelectedId(id);
    setMenuUrl(restaurant.menuUrl);
    setAccentColor(restaurant.color);
  }

  function handleDownload() {
    const canvas = canvasWrapRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "menu-qr.png";
    link.href = canvas.toDataURL();
    link.click();
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(menuUrl);
    } catch {
      // Clipboard access can be denied by the browser; fail silently.
    }
  }

  if (!selectedRestaurant) return null;

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <h3>Generate Restaurant QR Code</h3>
          <div className="sub">Create a scannable digital menu code for any client</div>
        </div>
      </div>

      <div className="qr-gen">
        <div>
          <div className="field">
            <label htmlFor="rest-select">Restaurant</label>
            <select
              id="rest-select"
              value={selectedRestaurant.id}
              onChange={(e) => handleRestaurantChange(e.target.value)}
            >
              {restaurants.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="menu-url">Menu Link</label>
            <input
              id="menu-url"
              type="text"
              value={menuUrl}
              onChange={(e) => setMenuUrl(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Accent Color</label>
            <div className="swatches">
              {ACCENT_SWATCHES.map((color) => (
                <div
                  key={color}
                  role="button"
                  tabIndex={0}
                  aria-label={`Use accent color ${color}`}
                  className={`swatch${accentColor === color ? " selected" : ""}`}
                  style={{ background: color }}
                  onClick={() => setAccentColor(color)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setAccentColor(color);
                  }}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", marginTop: 6 }}
            onClick={() => setMenuUrl((url) => url)}
          >
            <RefreshIcon />
            Regenerate QR
          </button>
        </div>

        <div className="qr-preview-card">
          <span className="ribbon">LIVE</span>
          <div className="qr-canvas-wrap" ref={canvasWrapRef}>
            <QRCodeCanvas
              value={menuUrl || " "}
              size={168}
              fgColor={accentColor}
              bgColor="#ffffff"
              level="H"
            />
          </div>
          <div>
            <div className="qr-name">{selectedRestaurant.name}</div>
            <div className="qr-url">{menuUrl.replace("https://", "")}</div>
          </div>
          <div className="qr-actions">
            <button type="button" className="btn-ghost" onClick={handleCopyLink}>
              Copy Link
            </button>
            <button type="button" className="btn-solid" onClick={handleDownload}>
              Download PNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}