/**
 * Cliente Supabase (lazy + guardado).
 *
 * Sin VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY la app funciona en modo
 * demostración: getSupabase() devuelve null y las llamadas de persistencia
 * se omiten con un log. Esto permite desplegar la landing sin backend y
 * activar la persistencia más tarde sin tocar componentes.
 *
 * NUNCA uses la service key aquí (solo la anon/public key).
 */
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let client = null

export function isSupabaseConfigured() {
  return Boolean(url && anonKey)
}

export function getSupabase() {
  if (!isSupabaseConfigured()) {
    return null
  }
  if (!client) {
    client = createClient(url, anonKey)
  }
  return client
}

/**
 * Inserta una fila si hay Supabase configurado. Devuelve { ok, data, error }.
 * En modo demo devuelve { ok: true, data: null, error: null, demo: true }.
 */
export async function insertRow(table, payload) {
  const sb = getSupabase()
  if (!sb) {
    console.info(`[demo] insertar en "${table}" (Supabase no configurado)`)
    return { ok: true, data: null, error: null, demo: true }
  }
  const { data, error } = await sb.from(table).insert(payload).select()
  return { ok: !error, data, error }
}
