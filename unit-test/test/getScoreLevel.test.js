const { getScoreLevel } = require('./getScoreLevel');

test('分數如果4.5以上回傳 high', () => {
    expect(getScoreLevel(4.5)).toBe('high');
    expect(getScoreLevel(5)).toBe('high');
});

test('分數如果3.5到4.49回傳 medium', () => {
    expect(getScoreLevel(4.4)).toBe('medium');
    expect(getScoreLevel(3.5)).toBe('medium');
});

test('分數如果3.5以下回傳 low', () => {
    expect(getScoreLevel(3.4)).toBe('low');
    expect(getScoreLevel(1)).toBe('low');
});