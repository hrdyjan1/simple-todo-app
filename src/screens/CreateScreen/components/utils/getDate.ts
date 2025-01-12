function getDate(params: { year: string; month: string; day: string }) {
  try {
    return new Date(`${params.year}-${params.month}-${params.day}`).getTime();
  } catch {
    return null;
  }
}

export { getDate };
