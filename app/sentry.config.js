// Use import statement instead of require()
import { withSentryConfig } from "@sentry/nextjs";

// Your module exports configuration
const moduleExports = {
  // You can add additional Next.js configurations here
};

// Sentry Webpack plugin options
const SentryWebpackPluginOptions = {
  silent: true, // Set silent to true to suppress error logging from Sentry
};

// Export the final configuration using withSentryConfig
export default withSentryConfig(moduleExports, SentryWebpackPluginOptions);
