// lib/redux/storage.ts
const isServer = typeof window === "undefined"

const noopStorage = {
  getItem: async () => null,
  setItem: async () => {},
  removeItem: async () => {}
}

let storage

if (!isServer) {
  // Only import localStorage on the client
  storage = require("redux-persist/lib/storage").default
} else {
  storage = noopStorage
}

export default storage
