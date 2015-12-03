import quotes from './index';
import { equal } from 'assert';

it('should fix simple quotes', ()=> {
  equal(quotes(`foo 'foo' bar`), `foo “foo” bar`);
  equal(quotes(`foo "foo" bar`), `foo “foo” bar`);
});

it('should fix simple quotes for French', ()=> {
  let locale = 'fr';
  equal(quotes(`foo 'foo' bar`, { locale }), `foo « foo » bar`);
});

it('should support locale', ()=> {
  let locale = 'ru';
  equal(quotes(`foo 'foo' bar`, {locale}), `foo «foo» bar`);
});

it('should not fuck up not closed quotes', ()=> {
  equal(quotes(`foo "foo" "bar`), `foo “foo” "bar`);
  equal(quotes(`foo "foo" 'bar`), `foo “foo” 'bar`);
  equal(quotes(`foo 'foo' "bar`), `foo “foo” "bar`);
  equal(quotes(`foo 'foo' 'bar`), `foo “foo” 'bar`);
});

it('should fix simple quotes in the start', ()=> {
  equal(quotes(`'foo' bar`), `“foo” bar`);
  equal(quotes(`"foo" bar`), `“foo” bar`);
});

it('should fix simple quotes in the end', ()=> {
  equal(quotes(`foo 'foo'`), `foo “foo”`);
  equal(quotes(`foo "foo"`), `foo “foo”`);
});

it('should fix simple quotes ending quite before punctuation', ()=> {
  equal(quotes(`foo 'foo'. bar`), `foo “foo”. bar`);
  equal(quotes(`foo "foo". bar`), `foo “foo”. bar`);
  equal(quotes(`foo 'foo', bar`), `foo “foo”, bar`);
  equal(quotes(`foo "foo", bar`), `foo “foo”, bar`);
});

it('should fix simple quotes and not messing up with apostrophes', ()=> {
  equal(quotes(`foo's 'foo' bar`), `foo's “foo” bar`);
  equal(quotes(`foo's "foo" bar`), `foo's “foo” bar`);
});

it('should fix simple several quotes in a row', ()=> {
  equal(quotes(`foo 'foo' bar 'foo' bar`), `foo “foo” bar “foo” bar`);
  equal(quotes(`foo "foo" bar "foo" bar`), `foo “foo” bar “foo” bar`);
});

it('should fix nested quotes', ()=> {
  equal(quotes(`foo "foo 'inside' bar" bar`), `foo “foo ‘inside’ bar” bar`);
  equal(quotes(`foo 'foo "inside" bar' bar`), `foo “foo ‘inside’ bar” bar`);
});

it('should fix nested quotes for French', ()=> {
  const locale = 'fr';
  equal(quotes(`foo "foo 'inside' bar" bar`, { locale }), `foo « foo “ inside ” bar » bar`);
  equal(quotes(`foo 'foo "inside" bar' bar`, { locale }), `foo « foo “ inside ” bar » bar`);
});

it('should fix nested quotes in start', ()=> {
  equal(quotes(`"foo 'inside' bar" bar`), `“foo ‘inside’ bar” bar`);
  equal(quotes(`'foo "inside" bar' bar`), `“foo ‘inside’ bar” bar`);
});

it('should fix nested quotes in end', ()=> {
  equal(quotes(`foo "foo 'inside' bar"`), `foo “foo ‘inside’ bar”`);
  equal(quotes(`foo 'foo "inside" bar'`), `foo “foo ‘inside’ bar”`);
});

it('should fix nested quotes ending quite before punctuation', ()=> {
  equal(quotes(`foo "foo 'inside' bar". Start`), `foo “foo ‘inside’ bar”. Start`);
  equal(quotes(`foo 'foo "inside" bar'. Start`), `foo “foo ‘inside’ bar”. Start`);
  equal(quotes(`foo "foo 'inside' bar", continuing`), `foo “foo ‘inside’ bar”, continuing`);
  equal(quotes(`foo 'foo "inside" bar', continuing`), `foo “foo ‘inside’ bar”, continuing`);
});

it('should fix several nested quotes', ()=> {
  equal(quotes(`foo "foo 'inside' bar" bar foo "foo 'inside' bar" bar`),
               `foo “foo ‘inside’ bar” bar foo “foo ‘inside’ bar” bar`)
  equal(quotes(`foo 'foo "inside" bar' bar foo 'foo "inside" bar' bar`),
               `foo “foo ‘inside’ bar” bar foo “foo ‘inside’ bar” bar`)
  equal(quotes(`foo 'foo "inside" bar' bar foo "foo 'inside' bar" bar`),
               `foo “foo ‘inside’ bar” bar foo “foo ‘inside’ bar” bar`)
});

it('should not change apostrophes', ()=> {
  equal(quotes(`I'm not changing apostrophes`),
               `I'm not changing apostrophes`);
  equal(quotes(`I'm not 'changing' apostrophes`),
               `I'm not “changing” apostrophes`);
});
