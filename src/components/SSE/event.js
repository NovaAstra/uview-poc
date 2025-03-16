import { fetchSSE } from "./index"

export const sseEvents = (callback) => fetchSSE("http://localhost:3000/events", callback)