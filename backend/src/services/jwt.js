import crypto from 'crypto'
import jwt from 'jsonwebtoken'

function requireEnv(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required env var: ${name}`)
  }
  return value
}

export function generateJti() {
  return crypto.randomUUID()
}

export function hashRefreshToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex')
}

export function signAccessToken({ userId, role }) {
  const secret = requireEnv('JWT_ACCESS_SECRET')
  const expiresIn = process.env.ACCESS_TOKEN_TTL ?? '15m'

  return jwt.sign({ role }, secret, {
    subject: String(userId),
    expiresIn,
  })
}

export function verifyAccessToken(token) {
  const secret = requireEnv('JWT_ACCESS_SECRET')
  return jwt.verify(token, secret)
}

export function signRefreshToken({ userId, authIdentityId, jti }) {
  const secret = requireEnv('JWT_REFRESH_SECRET')
  const expiresIn = process.env.REFRESH_TOKEN_TTL ?? '30d'

  return jwt.sign({ aid: String(authIdentityId), jti }, secret, {
    subject: String(userId),
    expiresIn,
  })
}

export function verifyRefreshToken(token) {
  const secret = requireEnv('JWT_REFRESH_SECRET')
  return jwt.verify(token, secret)
}
