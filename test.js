import quotes from './index';
import { equal } from 'assert';

const american = { locale: 'en-us' };
const russian  = { locale: 'ru' };
const french = { locale: 'fr' };

it('should do nothing if locale is undefined', () =>
  equal(quotes(`foo 'foo' bar`), `foo 'foo' bar`));

it('should fix simple quotes', () => {
  equal(quotes(`foo 'foo' bar`, american), `foo “foo” bar`);
  equal(quotes(`foo "foo" bar`, american), `foo “foo” bar`);
});

it('should fix nested quotes', () => {
  equal(quotes(`foo "foo 'inside' bar" bar`, american), `foo “foo ‘inside’ bar” bar`);
  equal(quotes(`foo 'foo "inside" bar' bar`, american), `foo “foo ‘inside’ bar” bar`);
});

it('should fix simple quotes for French', () =>
  equal(quotes(`foo 'foo' bar`, french), `foo « foo » bar`));

it('should not fuck up not closed quotes', () =>
  equal(quotes(`foo "foo" "bar`, american), `foo “foo” "bar`));

it('should fix simple quotes in the start', () =>
  equal(quotes(`'foo' bar`, american), `“foo” bar`));

it('should fix simple quotes in the end', () =>
  equal(quotes(`foo 'foo'`, american), `foo “foo”`));

it('should fix simple quotes ending quite before dot', () =>
  equal(quotes(`foo 'foo'. bar`, american), `foo “foo”. bar`));

it('should fix simple quotes ending quite before coma', () =>
  equal(quotes(`foo "foo", bar`, american), `foo “foo”, bar`));

it('should fix simple quotes and not messing up with apostrophes', () =>
  equal(quotes(`foo's 'foo' bar`, american), `foo's “foo” bar`));

it('should fix simple several quotes in a row', () =>
  equal(quotes(`foo 'foo' bar 'foo' bar`, american), `foo “foo” bar “foo” bar`));

it('should fix nested quotes for French', () =>
  equal(quotes(`foo "foo 'inside' bar" bar`, french), `foo « foo “ inside ” bar » bar`));

it('should fix nested quotes in start', () =>
  equal(quotes(`"foo 'inside' bar" bar`, american), `“foo ‘inside’ bar” bar`));

it('should fix nested quotes in end', () =>
  equal(quotes(`foo "foo 'inside' bar"`, american), `foo “foo ‘inside’ bar”`));

it('should not change apostrophes', () =>
  equal(quotes(`I'm not changing apostrophes`, american), `I'm not changing apostrophes`));

it('should fix quotes preceded by a paren', () =>
  equal(quotes(`("foo" bar baz)`, american), `(“foo” bar baz)`));

it('should fix quotes followed by a paren', () =>
  equal(quotes(`(foo bar "baz")`, american), `(foo bar “baz”)`));

it('should fix quotes inside parens', () =>
  equal(quotes(`(foo "bar" baz)`, american), `(foo “bar” baz)`));

it('should fix quotes immediately surroundedy by parens', () =>
  equal(quotes(`("foo bar baz")`, american), `(“foo bar baz”)`));

it('should fix quotes surrounded by square brackets', () =>
  equal(quotes(`["foo bar baz"]`, american), `[“foo bar baz”]`));

it('should fix quotes followed by several dots', () =>
  equal(quotes(`foo "bar"... baz`, american), `foo “bar”... baz`));

it('should fix quotes followed by an ellipsis', () =>
  equal(quotes(`foo "bar"… baz`, american), `foo “bar”… baz`));
