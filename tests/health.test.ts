import { health } from "../backend/src/health";

/** Representativo. Critério da spec 001. */
export function testHealth(): void {
  const result = health();
  if (result.status !== "ok") {
    throw new Error("health deveria responder ok");
  }
}
