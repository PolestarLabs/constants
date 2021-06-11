export default function fibonacci(start: number, pos: number) {
  let res = start;
  let pre = 0;
  while (pos--) {
    let t = res;
    res += pre;
    pre = t;
  }
  return res;
}

export const fbBaseline = 128;