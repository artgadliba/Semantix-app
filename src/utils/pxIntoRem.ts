const DEFAULT_FONT_SIZE = 16;

function pxIntoRem(px: number): string {
  return (px / DEFAULT_FONT_SIZE).toFixed(3) + "rem";
}

export default pxIntoRem;
