export const radToDeg = (radians: number): number => {
  return radians * Math.PI / 180
}

export const degToRad = (degrees: number): number => {
  return degrees * 180 / Math.PI;
}