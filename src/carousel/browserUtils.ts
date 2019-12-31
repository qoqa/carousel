export function supportsObjectFit(): boolean {
  return 'objectFit' in document.documentElement.style;
}
