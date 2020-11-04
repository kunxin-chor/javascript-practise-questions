

test('leftOrRight(2,3) should be right', ()=>{
    expect(leftOrRight(2, 3)).toBe('right');
});

test('leftOrRight(3, 2) should be left', ()=>{
    expect(leftOrRight(2, 3)).toBe('left');
});

test('leftOrRight(3, 3) should be same', ()=>{
    expect(leftOrRight(2, 3)).toBe('same');
});