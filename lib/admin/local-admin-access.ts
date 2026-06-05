/** Local admin helpers are always on in development; production requires an explicit opt-in. */
export function isLocalAdminHelpersEnabled(): boolean {
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  return process.env.NEXT_PUBLIC_ENABLE_LOCAL_ADMIN_HELPERS === "true";
}
