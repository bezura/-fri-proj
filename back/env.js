export const envSchema = {
  type: "object",
  required: [
    "PORT",
    "BASE_URL",
    "FRONTEND_URL",
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
  ],
  properties: {
    PORT: { type: "string", default: "3000" },
    BASE_URL: { type: "string" },
    FRONTEND_URL: { type: "string" },
    SMTP_HOST: { type: "string" },
    SMTP_PORT: { type: "string" },
    SMTP_USER: { type: "string" },
    SMTP_PASS: { type: "string" },
  },
};

export const envOptions = {
  schema: envSchema,
  dotenv: true,
};
