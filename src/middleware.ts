export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin", "/blog", "/gallery"],
};
