export function getHslColor(color: string, opacity?: number) {
  if (!opacity) {
    return `hsl(${color})`;
  }
  return `hsl(${color} / ${opacity})`;
}
