export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((word) => word[0])
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatCompactNumber(value: number): string {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toString();
}

export function formatInteger(value: number): string {
  return value.toLocaleString("en-US");
}