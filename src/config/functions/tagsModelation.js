export function tagsModelation(string) {
  return string.split(" ").map((e) => `#${e}`);
}
