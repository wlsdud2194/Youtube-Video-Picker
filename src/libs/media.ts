export const media = (size: number) => `@media (max-width: ${size}px)`;

export const breakpoint = {
  lg: media(1024),
  md: media(756),
  sm: media(456),
}
