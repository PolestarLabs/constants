import fibonacci, { fbBaseline } from "./util/Fibonacci";

const mdP = (S: number) => ~~(fibonacci(fbBaseline, S));
const bgP = (S: number) => ~~(mdP(S) * fibonacci(fbBaseline * 2.5, 1) * S / fbBaseline)

export const SAPPHIRE_MODIFIER = 0.000794912559618442;
export const JADE_MODIFIER = 2250;
export const TOKEN_MODIFIER = 0.5;

export enum MedalPrices {
  /** 1664 */
  UR = mdP(6),
  /** 1024 */
  SR = mdP(5),
  /** 640 */
  R = mdP(4),
  /** 384 */
  U = mdP(3),
  /** 256 */
  C = mdP(2),
}

export enum BackgroundPrices {
  /** 24960 */
  UR = bgP(6),
  /** 12800 */
  SR = bgP(5),
  /** 6400 */
  R = bgP(4),
  /** 2880 */
  U = bgP(3),
  /** 1280 */
  C = bgP(2),
}
