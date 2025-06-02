import { useEffect, useRef, useState } from "react";
import tilemapSrc from "./sheet.png";

const TILE_SIZE = 16;
const TILE_COLUMNS = 8;
const TILE_ROWS = 8;

export const TileCropper = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const image = new Image();
  image.src = tilemapSrc;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = TILE_COLUMNS * TILE_SIZE * 2;
    canvas.height = TILE_ROWS * TILE_SIZE * 2;

    image.onload = () => {
      setImageLoaded(true);
      for (let y = 0; y < TILE_ROWS; y++) {
        for (let x = 0; x < TILE_COLUMNS; x++) {
          const dx = x * TILE_SIZE * 2;
          const dy = y * TILE_SIZE * 2;

          ctx.drawImage(
            image,
            x * TILE_SIZE,
            y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE,
            dx,
            dy,
            TILE_SIZE * 2,
            TILE_SIZE * 2
          );

          // Граница тайла
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
          ctx.strokeRect(dx, dy, TILE_SIZE * 2, TILE_SIZE * 2);

          // Координаты
          ctx.font = "10px monospace";
          ctx.fillStyle = "white";
          ctx.fillText(`(${x},${y})`, dx + 2, dy + 12);
        }
      }
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          border: "1px solid black",
          imageRendering: "pixelated",
        }}
      />
      {!imageLoaded && <p>Loading tilemap...</p>}
    </div>
  );
};