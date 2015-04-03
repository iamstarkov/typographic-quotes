import quotes from './index';
import { equal } from 'assert';

it('should fix simple quotes', ()=> {
  const result = 'foo “foo” bar'
  equal(quotes(`foo 'foo' bar`), result);
  equal(quotes(`foo "foo" bar`), result);
});

it('should fix nested quotes', ()=> {
  const result = 'foo “foo ‘inside’ bar” bar';
  equal(quotes(`foo "foo 'inside' bar" bar`), result);
  equal(quotes(`foo 'foo "inside" bar' bar`), result);
});

it('should fix siblings nested quotes', ()=> {
  const result = 'foo “foo ‘inside’ bar” bar foo “foo ‘inside’ bar” bar';
  equal(quotes(`foo "foo 'inside' bar" bar foo "foo 'inside' bar" bar`), result)
  equal(quotes(`foo 'foo "inside" bar' bar foo 'foo "inside" bar' bar`), result)
  equal(quotes(`foo 'foo "inside" bar' bar foo "foo 'inside' bar" bar`), result)
});
