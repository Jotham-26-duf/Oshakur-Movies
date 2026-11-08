const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isCatalogUuid(value: unknown): value is string {
  return typeof value === "string" && UUID_PATTERN.test(value);
}

function safeLogValue(value: string) {
  return value
    .replace(/https?:\/\/[^\s"'<>]+/gi, "[url]")
    .replace(/\b(?:Bearer\s+)?(?:sb_(?:publishable|secret)_[A-Za-z0-9_-]+|eyJ[A-Za-z0-9_.-]{20,})/gi, "[redacted]")
    .replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/gi, "[id]")
    .replace(/[\r\n\t]+/g, " ")
    .slice(0, 300);
}

/** Log useful Supabase/PostgREST diagnostics without emitting credentials or record identifiers. */
export function logCatalogError(operation: string, error: unknown) {
  const record = typeof error === "object" && error !== null
    ? error as { code?: unknown; message?: unknown; status?: unknown }
    : null;
  const code = typeof record?.code === "string" && /^[A-Z0-9]{3,12}$/i.test(record.code)
    ? record.code
    : undefined;
  const message = typeof record?.message === "string"
    ? safeLogValue(record.message)
    : error instanceof Error
      ? safeLogValue(error.message)
      : "Unknown catalog storage error";
  const status = typeof record?.status === "number" && Number.isInteger(record.status)
    ? record.status
    : undefined;

  console.error(`[catalog:${operation}] ${JSON.stringify({ code, status, message })}`);
}
