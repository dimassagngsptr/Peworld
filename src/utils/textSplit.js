export function splitTextIntoParts(text) {
  const words = text.split(" ");
  const wordsPerPart = Math.floor(words.length / 5);
  const extraWords = words.length % 5;

  const result = [];
  let start = 0;

  for (let i = 0; i < 5; i++) {
    let end = start + wordsPerPart;
    if (i < extraWords) {
      end++;
    }
    result.push(words.slice(start, end).join(" "));
    start = end;
  }

  return result;
}
