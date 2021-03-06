import { ENV_DEV, ENV_PROD, ENV_TEST, } from './BuildConfig'
import * as DEV_CONFIG from '../config/development.config'
import * as PROD_CONFIG from '../config/production.config'

const env = process.env.NODE_ENV

export const CONFIG = (env === ENV_DEV) ? DEV_CONFIG : PROD_CONFIG

export const GLOBAL_VARIABLES = { /** used by Webpack.DefinePlugin */
  'process.env.ENV_DEV': JSON.stringify(ENV_DEV),
  'process.env.ENV_PROD': JSON.stringify(ENV_PROD),
  'process.env.NODE_ENV': JSON.stringify(env),

  /** variables defined in `CONFIG` file ares already stringified */
  'process.env.STORAGES': CONFIG.STORAGES,
  'process.env.TITLE': CONFIG.TITLE,
}
