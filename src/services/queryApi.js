import { API_BASE_URL } from '../config'

export async function runQuery(payload) {
  const res = await fetch(`${API_BASE_URL.replace(/\/$/, '')}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Query failed (${res.status})`)
  }

  return await res.json()
}

export async function getHealth() {
   try {
    const res = await fetch(
      `${API_BASE_URL.replace(/\/$/, '')}/health`,
      { cache: 'no-store' }
    )
    if (!res.ok) return  { status: "offline"}
    return await res.json()
  } catch {
    return { status: "offline"}
  }
}

export async function getSuggestions(fieldPath) {
  return { suggestions: [] }
}
