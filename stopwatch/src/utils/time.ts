const prependZero = (str: string) => (str.length > 1 ? str : "0" + str);

const convertSecondsToTimeString = (seconds: number) => {
  const h = prependZero(Math.floor(seconds / 3600).toString(10));
  const m = prependZero(Math.floor((seconds % 3600) / 60).toString(10));
  const s = prependZero(Math.floor((seconds % 3600) % 60).toString(10));
  return `${h}:${m}:${s}`;
};

export {convertSecondsToTimeString};