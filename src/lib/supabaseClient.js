import { createClient } from '@supabase/supabase-js'

/**
 * Cliente Supabase opcional.
 * - Configura las variables VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY para activarlo.
 * - Sin ellas entra en MODO DEMO: los insert se registran en consola y no fallan.
 */
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = url && anonKey ? createClient(url, anonKey) : null

export async function insertRow(table, payload) {
  if (!supabase) {
    console.info(`[demo] insertRow("${table}")`, payload)
    return { demo: true }
  }
  const { data, error } = await supabase.from(table).insert(payload).select()
  if (error) throw new Error(error.message)
  return { data, demo: false }
}
