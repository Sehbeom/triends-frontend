export function selectRandomColor() {
  const colorList = [
    "var(--card-tomato)",
    "var(--card-deep-green)",
    "var(--card-bright-green)",
    "var(--card-light-yello)",
    "var(--card-deep-yello)",
    "var(--card-orange)",
    "var(--card-deep-pink)",
    "var(--card-light-pink)",
    "var(--card-light-purple)",
    "var(--card-deep-purple)",
  ];
  return colorList[Math.floor(Math.random() * colorList.length)];
}
