import quotesDB from 'typographic-quotes-l10n-db'

export default (input, locale='en-us')=> {
  const quotes = quotesDB[locale];
  const primary = [quotes[0], quotes[1]];
  const secondary = [quotes[2], quotes[3]];
  return input
    .replace(
      /"(.*?)'(.*?)'(.*?)"|'(.*?)"(.*?)"(.*?)'/gim,
      `${primary[0]}$1$4${secondary[0]}$2$5${secondary[1]}$3$6${primary[1]}`
    )
    .replace(/"(.*?)"|'(.*?)'/gim, `${primary[0]}$1$2${primary[1]}`)
}
