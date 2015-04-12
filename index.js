import quotesDB from 'typographic-quotes-l10n-db';

export default (input, {locale = 'en-us'} = {})=> {
  const localeQuotes = quotesDB[locale];
  const pattern = /(^|\s)(?:"(.*?)"|'(.*?)')(\s|$|\.|,)/gim;

  const primary = (match, before='', part1='', part2='', after='')=> {
    const quotes = [localeQuotes[0], localeQuotes[1]];
    const text = (part1 + part2).replace(pattern, secondary);
    return `${before}${quotes[0]}${text}${quotes[1]}${after}`;
  }

  const secondary = (match, before='', part1='', part2='', after='')=> {
    const quotes = [localeQuotes[2], localeQuotes[3]];
    let text = part1 + part2;
    return `${before}${quotes[0]}${text}${quotes[1]}${after}`;
  }

  return input.replace(pattern, primary);
}
