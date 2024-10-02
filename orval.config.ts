module.exports = {
  api: {
    output: {
      mode: "tags-split",
      target: "./src/services/api.ts",
      schemas: "./src/models",
      client: "react-query",
      override: {
        mutator: {
          path: "./src/services/mainAxios.ts",
          name: "mainAxios",
        },
      },
    },
    input: {
      target: "https://interview-api-8icc.onrender.com/api-docs-config",
    },
  },
};
