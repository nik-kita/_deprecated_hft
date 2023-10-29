import { load } from "$std/dotenv/mod.ts";

const envPath = `${Deno.cwd()}/.env`;

await load({ envPath, export: true });

const CONFIG_KEYS = [
  "GOOGLE_AUTH_CLIENT_ID",
  "API_URL",
  "SELF_URL",
] as const;

export const CONFIG = CONFIG_KEYS.reduce((conf, key) => {
  Object.assign(conf, { [key]: getValue(key) });

  return conf;
}, {} as Record<typeof CONFIG_KEYS[number], string>);

function getValue(envName: string, throwError = false) {
  const v = Deno.env.get(envName);

  if (v) return v;

  const errorMessage = `${envName} is missing!`;

  if (throwError) throw new Error(errorMessage);

  return errorMessage;
}
