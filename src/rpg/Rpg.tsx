import { useEffect, useRef } from "react";
import tilemapSrc from "./sheet.png";

const TILE_SIZE = 16;
const MAP_WIDTH = 50;
const MAP_HEIGHT = 30;

// Each edge is represented as an array of 3 elements: [left, center, right] or [top, center, bottom]
// 'g' = grass, 'r' = road/earth
const TILES = {
  r: {
    x: 4,
    y: 5,
    edges: {
      top: ["r", "r", "r"],
      right: ["r", "r", "r"],
      bottom: ["r", "r", "r"],
      left: ["r", "r", "r"],
    },
  },
  r_none: {
    x: 5,
    y: 5,
    edges: {
      top: ["g", "g", "g"],
      right: ["g", "g", "g"],
      bottom: ["g", "g", "g"],
      left: ["g", "g", "g"],
    },
  },
  r_tl: {
    x: 2,
    y: 7,
    edges: {
      top: ["r", "r", "r"],
      right: ["r", "g", "g"],
      bottom: ["r", "g", "g"],
      left: ["r", "r", "r"],
    },
  },
  r_tr: {
    x: 3,
    y: 7,
    edges: {
      top: ["r", "r", "r"],
      right: ["r", "r", "r"],
      bottom: ["g", "g", "r"],
      left: ["r", "g", "g"],
    },
  },
  r_r: {
    x: 4,
    y: 7,
    edges: {
      top: ["g", "g", "r"],
      right: ["r", "r", "r"],
      bottom: ["g", "g", "r"],
      left: ["g", "g", "g"],
    },
  },
  r_brc: {
    x: 4,
    y: 6,
    edges: {
      top: ["g", "g", "g"],
      right: ["g", "g", "r"],
      bottom: ["g", "g", "r"],
      left: ["g", "g", "g"],
    },
  },
  r_b: {
    x: 5,
    y: 6,
    edges: {
      top: ["g", "g", "g"],
      right: ["g", "g", "r"],
      bottom: ["r", "r", "r"],
      left: ["g", "g", "r"],
    },
  },
  r_t: {
    x: 5,
    y: 6,
    rotate: 90,
    edges: {
      top: ["r", "r", "r"],
      right: ["r", "g", "g"],
      bottom: ["g", "g", "g"],
      left: ["r", "g", "g"],
    },
  },
  r_blc: {
    x: 6,
    y: 6,
    edges: {
      top: ["g", "g", "g"],
      right: ["g", "g", "g"],
      bottom: ["r", "g", "g"],
      left: ["g", "g", "r"],
    },
  },
  r_l: {
    x: 6,
    y: 7,
    edges: {
      top: ["r", "g", "g"],
      right: ["g", "g", "g"],
      bottom: ["r", "g", "g"],
      left: ["r", "r", "r"],
    },
  },
};

const tileKeys = Object.keys(TILES);

function edgesMatch(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

function getCompatible(tileList, topTile, leftTile) {
  return tileList.filter((key) => {
    const tile = TILES[key];
    const topOk =
      !topTile || edgesMatch(TILES[topTile].edges.bottom, tile.edges.top);
    const leftOk =
      !leftTile || edgesMatch(TILES[leftTile].edges.right, tile.edges.left);
    return topOk && leftOk;
  });
}

function generateMap() {
  const map = Array.from({ length: MAP_HEIGHT }, () =>
    Array(MAP_WIDTH).fill(null)
  );
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const top = y > 0 ? map[y - 1][x] : null;
      const left = x > 0 ? map[y][x - 1] : null;
      const candidates = getCompatible(tileKeys, top, left);
      map[y][x] =
        candidates.length > 0
          ? candidates[Math.floor(Math.random() * candidates.length)]
          : "road_x";
    }
  }
  return map;
}

export const Rpg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = tilemapSrc;

    image.onload = () => {
      const map = generateMap();
      canvas.width = MAP_WIDTH * TILE_SIZE;
      canvas.height = MAP_HEIGHT * TILE_SIZE;

      for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
          const key = map[y][x];
          const tile = TILES[key];
          ctx.drawImage(
            image,
            tile.x * TILE_SIZE,
            tile.y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE,
            x * TILE_SIZE,
            y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
          );
        }
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        imageRendering: "pixelated",
      }}
    />
  );
};
