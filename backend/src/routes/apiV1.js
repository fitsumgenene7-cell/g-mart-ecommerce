import { Router } from 'express'

export const apiV1 = Router()

apiV1.get('/', (_req, res) => {
    res.json({ ok: true, name: 'g-mart api', version: 'v1' })
})
