import mongoose from 'mongoose'

let isConnecting = false

export function getMongoStatus() {
    return {
        enabled: Boolean(process.env.MONGO_URI),
        state: mongoose.connection.readyState, // 0=disconnected,1=connected,2=connecting,3=disconnecting
        name: mongoose.connection.name ?? null,
        host: mongoose.connection.host ?? null,
    }
}

export async function connectMongo() {
    const mongoUri = process.env.MONGO_URI

    if (!mongoUri) {
        return { enabled: false, connected: false }
    }

    if (mongoose.connection.readyState === 1) {
        return { enabled: true, connected: true }
    }

    if (isConnecting) {
        // Wait briefly for the in-flight connection to settle
        await new Promise((resolve) => setTimeout(resolve, 50))
        return { enabled: true, connected: mongoose.connection.readyState === 1 }
    }

    isConnecting = true
    try {
        await mongoose.connect(mongoUri, {
            autoIndex: process.env.NODE_ENV !== 'production',
        })

        return { enabled: true, connected: true }
    } finally {
        isConnecting = false
    }
}

export async function disconnectMongo() {
    if (mongoose.connection.readyState === 0) return
    await mongoose.disconnect()
}
