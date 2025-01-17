export class NotFoundError extends Error {
  readonly statusCode: number;
  readonly action: string;

  constructor() {
    super("This route doesn't exist.");
    this.name = "NotFoundError";
    this.statusCode = 404;
    this.action =
      "Verify if the address is correct or if the http verb is valid.";
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status_code: this.statusCode,
      action: this.action,
    };
  }
}
export class InternalServerError extends Error {
  readonly statusCode: number;
  readonly action: string;

  constructor({ cause }: { cause: Error }) {
    super("An unexpected error occurred on our servers.", {
      cause,
    });
    this.name = "InternalServerError";
    this.statusCode = 500;
    this.action = "Contact the support.";
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status_code: this.statusCode,
      action: this.action,
    };
  }
}
