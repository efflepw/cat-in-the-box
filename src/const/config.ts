type ConfigType = {
  position: [number, number, number];
  rotation: number;
};

export const CAT_CONFIG = {
  positionX: -0.5,
  positionY: -0.5,
  positionZA: -6,
  positionZB: 18,
  rotationY: 1.6,
  scale: [1.2, 1.2, 1.2] as const,
};

export const BOXES_CONFIG: ConfigType[] = [
  { position: [0, 0, 18], rotation: 1.2 },
  { position: [0, 0, 12], rotation: 0.4 },
  { position: [0, 0, 6], rotation: -0.4 },
  { position: [0, 0, 0], rotation: 0.3 },
  { position: [0, 0, -6], rotation: 0.1 },
  { position: [0, 0, -12], rotation: -0.4 },
  { position: [0, 0, -18], rotation: -0.6 },
];

export const BOX_COUNT = BOXES_CONFIG.length;
