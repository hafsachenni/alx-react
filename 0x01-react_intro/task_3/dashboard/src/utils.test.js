import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('checking if getFullYear returns the correct', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
});


test('checking if getFooterCopy returns the correct string with true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});
test('checking if getFooterCopy returns the correct string with false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});


test('checking the returned string for getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
