import quotes from './index';
import { equal } from 'assert';

it('should fix simple quotes', ()=> {
  const defaultLocaleResult = 'foo “foo” bar'
  equal(quotes(`foo 'foo' bar`), defaultLocaleResult);
  equal(quotes(`foo "foo" bar`), defaultLocaleResult);

  const nonDefaultLocaleResult = 'foo «foo» bar'
  equal(quotes(`foo 'foo' bar`, 'ru'), nonDefaultLocaleResult);
  equal(quotes(`foo "foo" bar`, 'ru'), nonDefaultLocaleResult);
});

it('should fix nested quotes', ()=> {
  const defaultLocaleResult = 'foo “foo ‘inside’ bar” bar';
  equal(quotes(`foo "foo 'inside' bar" bar`), defaultLocaleResult);
  equal(quotes(`foo 'foo "inside" bar' bar`), defaultLocaleResult);

  const nonDefaultLocaleResult = 'foo «foo „inside“ bar» bar';
  equal(quotes(`foo "foo 'inside' bar" bar`, 'ru'), nonDefaultLocaleResult);
  equal(quotes(`foo 'foo "inside" bar' bar`, 'ru'), nonDefaultLocaleResult);
});

it('should fix siblings nested quotes', ()=> {
  const defaultLocaleResult = 'foo “foo ‘inside’ bar” bar foo “foo ‘inside’ bar” bar';
  equal(quotes(`foo "foo 'inside' bar" bar foo "foo 'inside' bar" bar`), defaultLocaleResult)
  equal(quotes(`foo 'foo "inside" bar' bar foo 'foo "inside" bar' bar`), defaultLocaleResult)
  equal(quotes(`foo 'foo "inside" bar' bar foo "foo 'inside' bar" bar`), defaultLocaleResult)

  const nonDefaultLocaleResult = 'foo «foo „inside“ bar» bar foo «foo „inside“ bar» bar';
  equal(quotes(`foo "foo 'inside' bar" bar foo "foo 'inside' bar" bar`, 'ru'), nonDefaultLocaleResult)
  equal(quotes(`foo 'foo "inside" bar' bar foo 'foo "inside" bar' bar`, 'ru'), nonDefaultLocaleResult)
  equal(quotes(`foo 'foo "inside" bar' bar foo "foo 'inside' bar" bar`, 'ru'), nonDefaultLocaleResult)
});
