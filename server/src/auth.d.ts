import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: stringn
      name: string
      avatarUrl: string
    }
  }
}
