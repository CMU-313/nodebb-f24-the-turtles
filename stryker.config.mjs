// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "mocha", // Change 'command' to your actual test runner, such as Mocha
  mochaOptions: {
    spec: ["test/**"], // Adjust this to point to your test files
  },
  coverageAnalysis: "off", // Keep this as 'off' for mutation testing
  mutate: ["src/**/*.js"], // Target your source code files for mutation testing
  tempDirName: ".stryker-tmp", // Use a custom temporary directory
  ignorePatterns: [
    "build/**", // Ignore the build directory
    "public/**", // Ignore the public directory if not needed for tests
  ],
};

export default config;
