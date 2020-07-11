declare global {
  interface Window {
    kakao: any;
  }
}

type ApiEndpoint<P extends any[], R> = (...p: P) => Promise<R>;

type StatusSet = { status: string; error: {} };
