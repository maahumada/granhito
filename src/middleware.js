export { default } from "next-auth/middleware"

export const config = { matcher: ["/crear", "/hito/:id*"] }   // agregar con ,