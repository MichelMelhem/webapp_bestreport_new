import vikeReact from "vike-react/config"
import type { Config } from "vike/types"
import { Wrapper } from "./pages/Wrapper"

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Wrapper,

  // https://vike.dev/head-tags
  title: "BestReport",
  description: "BestReport is a site for creating and sharing reports.",

  extends: vikeReact
} satisfies Config
