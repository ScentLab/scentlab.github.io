const config = {
  mode: import.meta.env.MODE || "development",
  isProd: import.meta.env.MODE === "production",
  isDev: import.meta.env.MODE === "development",
  DEV_API_URL: import.meta.env.SNOWPACK_PUBLIC_DEV_API_URL || "",
  PROD_API_URL: import.meta.env.SNOWPACK_PUBLIC_PROD_API_URL || "",
  PP_USERNAME: import.meta.env.SNOWPACK_PUBLIC_PP_USERNAME || "",
  PP_PASSWORD: import.meta.env.SNOWPACK_PUBLIC_PP_PASSWORD || "",
  ES_URL: import.meta.env.SNOWPACK_PUBLIC_ES_URL || "",
  ES_USERNAME: import.meta.env.SNOWPACK_PUBLIC_ES_USERNAME || "",
  ES_PASSWORD: import.meta.env.SNOWPACK_PUBLIC_ES_PASSWORD || "",
  GA_TAG_MANAGER_ID: import.meta.env.SNOWPACK_PUBLIC_GA_TAG_MANAGER_ID || "",
};

export default config;
