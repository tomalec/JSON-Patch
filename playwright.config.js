const { defineConfig, devices } = require('@playwright/test');

// Must match the port in the `serve` npm script
const PORT = 5000;

module.exports = defineConfig({
  testDir: 'test/browser',
  forbidOnly: !!process.env.CI,
  use: {
    baseURL: `http://localhost:${PORT}`
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ],
  webServer: {
    command: 'npm run serve',
    url: `http://localhost:${PORT}/test/index.html`,
    reuseExistingServer: !process.env.CI
  }
});
