export function tagSharp(value: string) {
  if (value.charAt(0) === "#") {
    return value;
  } else {
    return `#${value}`;
  }
}

export function makeComma(value: string | number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
