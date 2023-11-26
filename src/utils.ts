export function randomIndex(array: unknown[]): number {
  return Math.floor(Math.random() * array.length);
}

export function randomElement<T>(array: T[]): T {
  return array[randomIndex(array)];
}
