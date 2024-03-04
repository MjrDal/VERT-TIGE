/**
 * An array of routes accessible to the public
 * these routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes are use for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes
 * Routes that start whit this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 *The default redirect path after logging in
 *@type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
