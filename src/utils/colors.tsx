export function interpolateBrand(index: number, totalColors: number): string {
  const prim: string = "#08AEEA";
  const seco: string = "#34D399";

  if (index <= 0) return prim;
  if (index >= totalColors - 1) return seco;

  const r1: number = parseInt(prim.slice(1, 3), 16);
  const g1: number = parseInt(prim.slice(3, 5), 16);
  const b1: number = parseInt(prim.slice(5, 7), 16);

  const r2: number = parseInt(seco.slice(1, 3), 16);
  const g2: number = parseInt(seco.slice(3, 5), 16);
  const b2: number = parseInt(seco.slice(5, 7), 16);

  const ratio: number = index / (totalColors - 1);
  const r: number = Math.round(r1 + ratio * (r2 - r1));
  const g: number = Math.round(g1 + ratio * (g2 - g1));
  const b: number = Math.round(b1 + ratio * (b2 - b1));

  const interpolatedColor: string = `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  return interpolatedColor;
}
