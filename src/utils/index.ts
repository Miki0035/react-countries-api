export const numberWithCommas = (x: number | "" | undefined) => {
  if (typeof x === "undefined") {
    return 0
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  };