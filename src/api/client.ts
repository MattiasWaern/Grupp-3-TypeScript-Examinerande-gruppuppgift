const BASE_URL = "/api";

async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
        throw new Error(`API-fel: ${res.status} ${res.statusText}`);
    }
    return res.json() as Promise<T>;
}

export async function get<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store" });
    return handleResponse<T>(res);
}

export async function post<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}` , {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
    });
    return handleResponse<T>(res);
}
export async function patch<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
  return handleResponse<T>(res);
}