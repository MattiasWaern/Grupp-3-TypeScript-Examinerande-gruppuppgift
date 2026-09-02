const BASE_URL = "http://localhost:3001";

async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
        throw new Error(`API-fel: ${res.status} ${res.statusText}`);
    }
    return res.json() as Promise<T>;
}

export async function post<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}` , {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
    });
    return handleResponse<T>(res);
}