import { envVariables } from "../config";

export function logError(err: any) {
  if (envVariables.nodeEnv === "production") {
    // TODO: log to Sentry
    return;
  }

  console.error(err);
}
