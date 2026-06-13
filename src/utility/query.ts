export function buildUrl(base: string, params?: Record<string, any>): string {
  if (!params) return base;
  const query = Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  return query ? `${base}?${query}` : base;
}
