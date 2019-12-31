function getDeviceConfiguration(): boolean {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return false;
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (!mediaQuery || typeof mediaQuery.matches === 'undefined') {
    return false;
  }

  return mediaQuery.matches;
}

function useDarkMode(): boolean {
  return getDeviceConfiguration();
}

export default useDarkMode;
