import quotesDB from 'typographic-quotes-l10n-db';

export default function typographicQuotes(input = '', {locale = 'en-us'} = {}) {
  let separator = '';
  const localeQuotes = quotesDB[locale];
  const pattern = /(^|\s)(?:"(.*?)"|'(.*?)')(\s|$|\.|,|\?|!)/gim;
  const handleQuotes = (quotes, cb) =>
    (match, before='', part1='', part2='', after='') => {
      let text = (part1 + part2);
      if (cb) { text = text.replace(pattern, cb); }
      if (locale === 'fr') { separator = ' '; }
      return `${before}${quotes[0]}${separator}${text}${separator}${quotes[1]}${after}`;
    }

  return input.replace(pattern,
    handleQuotes(
      localeQuotes.slice(0, 2),
      handleQuotes(localeQuotes.slice(2, 4))))
}
