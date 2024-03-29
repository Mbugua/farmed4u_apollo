const env = process.env.VUE_APP_ENV;

let envApiUrl = "http://127.0.0.1:8000/api/v1";

if (env === "production") {
  envApiUrl = `https://${process.env.VUE_APP_DOMAIN_PROD}`;
} else if (env === "staging") {
  envApiUrl = `https://${process.env.VUE_APP_DOMAIN_STAG}`;
} else {
  envApiUrl = `http://${process.env.VUE_APP_DOMAIN_DEV}`;
}

export const apiUrl = envApiUrl;
export const appName = process.env.VUE_APP_NAME;
