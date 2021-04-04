export const debounceTiming = {
  input: 500,
  button: 1000,
};

export const debounce = (
  func: (value: any) => any | void,
  wait: number,
  immediate?: boolean
): ((args: any) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null;

  return (args: any) => {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
};
