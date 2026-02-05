import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function createServer() {
    const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
        credentials: true,
    }),
)
    app.use(express.json())

    app.get('/health', (_req, res) => {
        res.json({ ok: true })
    })

    const shouldServeFrontend =
        process.env.SERVE_FRONTEND === 'true' ||
        process.env.NODE_ENV === 'production'

    if (shouldServeFrontend) {
        const frontendDistPath = path.resolve(__dirname, '../../frontend/dist')
        app.use(express.static(frontendDistPath))

        app.get('*', (req, res, next) => {
            if (req.path.startsWith('/api') || req.path === '/health') {
                return next()
            }

            res.sendFile(path.join(frontendDistPath, 'index.html'))
        })
    }

    return app
}
