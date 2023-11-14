import { Env, env } from './env'

/**
 * Contructor
 */
type Conf = {
  var: string
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    var: '',
  },

  /**
   * Production configurations
   */
  production: {
    var: '',
  },
}

/**
 * Module exports
 */
export default conf[env]
