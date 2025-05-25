export async function safeJsonFetch(url, options = {}) {
  const res = await fetch(url, { credentials: 'include', ...options });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} — ${text}`);
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error("Expected JSON, got: " + text);
  }

  return res.json();
}
