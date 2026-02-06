import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import { apiV1 } from './routes/apiV1.js'
import { getMongoStatus } from './db/mongo.js'

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

    app.use('/api/v1', apiV1)

    app.get('/health', (_req, res) => {
        res.json({ ok: true, mongo: getMongoStatus() })
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

    app.use((req, res) => {
        res.status(404).json({ ok: false, error: 'Not found' })
    })

    // eslint-disable-next-line no-unused-vars
    app.use((err, _req, res, _next) => {
        // eslint-disable-next-line no-console
        console.error(err)
        res.status(500).json({ ok: false, error: 'Internal server error' })
    })

    return app
}
