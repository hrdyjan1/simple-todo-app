function getDate(params: { year: string; month: string; day: string }) {
  try {
    const value = new Date(
      `${params.year}-${params.month}-${params.day}`,
    ).getTime();
    return isNaN(value) ? null : value;
  } catch {
    return null;
  }
}

export { getDate };
