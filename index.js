import db from 'typographic-quotes-l10n-db';

export default function typographicQuotes(input = '', { locale } = {}) {
  if (Object.keys(db).indexOf(locale) === -1) {
    return input;
  }
  const localeQuotes = db[locale];
  const separator = locale === 'fr' ? ' ' : '';

  const pattern = /(?<=^|\s|[\[(\-–—])(?:"(.*?)"|'(.*?)')(?=$|\s|[.,:;?!…\])\-–—])/gim;
  const handleQuotes = (quotes, cb) =>
    (match, part1='', part2='') => {
      let text = (part1 + part2);
      if (cb) { text = text.replace(pattern, cb); }
      return `${quotes[0]}${separator}${text}${separator}${quotes[1]}`;
    }

  return input.replace(pattern,
    handleQuotes(
      localeQuotes.slice(0, 2),
      handleQuotes(localeQuotes.slice(2, 4))))
}
