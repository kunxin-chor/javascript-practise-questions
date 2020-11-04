const f = require('./q3.test.js');

test('(a, ad, abc) => abcad', ()=>{
    expect(f('a', 'ad', 'abc')).toBe('abcad');
})