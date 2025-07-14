const { extractDistrict } = require('./extractDistrict');

test('可以提取出西屯區', () => {
    expect(extractDistrict('台中市西屯區文心路')).toBe('西屯區');
});

test('可以提取出南屯區', () => {
    expect(extractDistrict('台中市南屯區環中路四段303-1號')).toBe('南屯區');
});

test('如果沒有區就回傳空字串', () => {
    expect(extractDistrict('台中市')).toBe('');
});