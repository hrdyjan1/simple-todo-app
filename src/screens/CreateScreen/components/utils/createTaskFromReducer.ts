type UpdateDayAction = { type: 'UPDATE_DAY'; value: string };
type UpdateMonthAction = { type: 'UPDATE_MONTH'; value: string };
type UpdateYearAction = { type: 'UPDATE_YEAR'; value: string };
type UpdateNameAction = { type: 'UPDATE_TITLE'; value: string };

type Action =
  | UpdateDayAction
  | UpdateMonthAction
  | UpdateYearAction
  | UpdateNameAction;
type State = { day: string; month: string; year: string; title: string };

function createTaskFromReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { ...state, title: action.value };
    case 'UPDATE_DAY':
      return { ...state, day: action.value.substring(0, 2) };
    case 'UPDATE_MONTH':
      return { ...state, month: action.value.substring(0, 2) };
    case 'UPDATE_YEAR':
      return { ...state, year: action.value.substring(0, 4) };
    default:
      return state;
  }
}

export { createTaskFromReducer };
