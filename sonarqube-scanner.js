const scanner = require("sonarqube-scanner");
// eslint-disable-next-line @typescript-eslint/typedef
const userToken = "squ_e7b68441b990a8f98f6e55e88caadac9fdfa35af";
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: userToken,
    options: {
      "sonar.sources": "./src",
      "sonar.exclusions": "**/__tests__/**,src/middlewares/**,src/server.ts",
    },
  },
  () => process.exit()
);
