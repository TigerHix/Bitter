export const format10k = (n: number, suffix: string = ''): string => {
  if (n < 10000) return n.toString() + (suffix ? (' ' + suffix) : (''))
  return Math.round(n / 10000).toFixed(1) + '万' + (suffix ? (' ' + suffix) : (''))
}
