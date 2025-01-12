const defaultInitialTaskFormState = {
  title: '',
  day: '',
  month: '',
  year: '',
  status: 'PENDING',
  id: new Date().getTime().toString(),
} as const;

export { defaultInitialTaskFormState };
