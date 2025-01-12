import { getDate } from '../getDate';

describe('getDate', () => {
  test('should return a valid timestamp for valid date inputs', () => {
    const params = { year: '2025', month: '01', day: '12' };
    const result = getDate(params);
    expect(result).toBe(new Date('2025-01-12').getTime());
  });

  test('should handle single-digit months and days correctly', () => {
    const params = { year: '2025', month: '1', day: '5' };
    const result = getDate(params);
    const date = new Date(result ?? 0);
    expect(date.getDay()).toBe(new Date('2025-01-05').getDay());
    expect(date.getMonth()).toBe(new Date('2025-01-05').getMonth());
    expect(date.getFullYear()).toBe(new Date('2025-01-05').getFullYear());
  });

  test('should return null for invalid day', () => {
    const params = { year: '2025', month: '02', day: '30' };
    const result = getDate(params);
    expect(result).toBeNull();
  });

  test('should return null for completely invalid inputs', () => {
    const params = { year: 'abc', month: 'def', day: 'ghi' };
    const result = getDate(params);
    expect(result).toBeNull();
  });

  test('should handle edge cases like leap years', () => {
    const params = { year: '2024', month: '02', day: '29' }; // Leap year
    const result = getDate(params);
    expect(result).toBe(new Date('2024-02-29').getTime());
  });

  test('should return null for a non-leap year February 29th', () => {
    const params = { year: '2023', month: '02', day: '29' };
    const result = getDate(params);
    expect(result).toBeNull();
  });
});
