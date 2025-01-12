import { taskFromReducer } from '../taskFromReducer';

describe('taskFromReducer', () => {
  const initialState = {
    id: 'id123',
    day: '01',
    month: '01',
    year: '2025',
    status: 'PENDING' as const,
    title: 'Initial Title',
  };

  test.each([
    [{ type: 'UPDATE_TITLE', value: 'New Task' }, { title: 'New Task' }],
    [{ type: 'UPDATE_DAY', value: '15' }, { day: '15' }],
    [{ type: 'UPDATE_DAY', value: '1234' }, { day: '12' }],
    [{ type: 'UPDATE_MONTH', value: '06' }, { month: '06' }],
    [{ type: 'UPDATE_MONTH', value: '0789' }, { month: '07' }],
    [{ type: 'UPDATE_YEAR', value: '2024' }, { year: '2024' }],
    [{ type: 'UPDATE_YEAR', value: '202456' }, { year: '2024' }],
  ])('updates state for action %j', (action, expected) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newState = taskFromReducer(initialState, action as any);
    expect(newState).toEqual({ ...initialState, ...expected });
  });
});
