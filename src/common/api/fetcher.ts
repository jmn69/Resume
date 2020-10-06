export default async function fetcher<R extends any = true>(
  url: string,
  options?: RequestInit
): Promise<R> {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await fetch(url, options);

    const contentLength = res.headers.get('content-length');
    if (contentLength !== '0') {
      const data = (await res.json()) as R;

      if (res.ok) {
        return (data || true) as R;
      }
      throw new Error('Something went wrong');
    } else {
      return true as R;
    }
  } catch (error) {
    // Log into sentry here
    throw error;
  }
}
