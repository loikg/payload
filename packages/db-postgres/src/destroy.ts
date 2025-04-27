import type { DrizzleAdapter } from '@payloadcms/drizzle/types'
import type { Destroy } from 'payload'

import type { PostgresAdapter } from './types.js'

export const destroy: Destroy = async function destroy(this: PostgresAdapter) {
  if (this.pool) {
    await this.pool.end()
  }
  if (this.drizzleAdapter.destroy) {
    await this.drizzleAdapter.destroy()
  }
}
