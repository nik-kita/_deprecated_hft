import { CONFIG } from "../src/config.ts";

export default function ApiForm() {
  return (
    <form method={"POST"} action={`${CONFIG.API_URL}/api-keys`}>
      <label for={"api-key"}>API key:</label>
      <input type="password" name="api-key" />
      <label for={"api-secret"}>API secret:</label>
      <input type="password" name="api-secret" />
      <input type="submit" />
    </form>
  );
}
