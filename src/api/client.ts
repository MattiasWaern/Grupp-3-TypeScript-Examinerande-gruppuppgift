const BASE_URL = "http://localhost:3001";

async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
        throw new Error(`API-fel: ${res.status} ${res.statusText}`);
    }
    return res.json() as Promise<T>;
}
