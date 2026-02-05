import { createServer } from './server.js'

const port = Number(process.env.PORT ?? 4000)

const app = createServer()

app.listen(port, () => {
  // eslint-disable-next-line no-console
    console.log(`API listening on http://localhost:${port}`)
})
