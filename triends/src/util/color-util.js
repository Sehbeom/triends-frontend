export function selectRandomColor() {
  const colorList = [
    "--card-tomato",
    "--card-deep-green",
    "--card-bright-green",
    "--card-yello",
    "--card-pink",
    "--card-light-purple",
    "--card-deep-purple",
  ];
  return colorList[Math.floor(Math.random() * colorList.length)];
}
