// https://medium.com/@xjamundx/custom-javascript-errors-in-es6-aa891b173f87
// https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216
class APIError extends Error {
  message: string;

  httpStatusCode: number;

  status: number;

  constructor(message: string, httpStatusCode?: number) {
    super(message);
    this.name = this.constructor.name;

    if (!Error.captureStackTrace) {
      this.stack = new Error().stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

    this.message = message || '';
    this.httpStatusCode = httpStatusCode || null;
    // For backwards compatibility
    this.status = this.httpStatusCode;
  }
}

export default APIError;
