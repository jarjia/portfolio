import { SetState } from '@/types'

export type Context = {
  theme: null | string
  handleModes: (argTheme: string) => void
}
