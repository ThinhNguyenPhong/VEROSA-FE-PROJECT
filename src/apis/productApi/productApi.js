import api from "../../config/api";

export async function getAllProduct(queryString = "") {
    const url = `/api/products${queryString ? `?${queryString}` : ""}`;
    console.log("[API] GET →", api.defaults.baseURL + url);
  
    try {
      const res  = await api.get(url);
      const body = res.data;
      console.log("[API] 200 GET /api/products payload:", body);

      if (Array.isArray(body)) {
        return body;
      }
      if (body.data?.items && Array.isArray(body.data.items)) {
        return body.data.items;
      }
      if (body.data?.blogs && Array.isArray(body.data.blogs)) {
        return body.data.blogs;
      }
      console.warn("[API] Unexpected format, returning []:", body);
      return [];
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Unknown error";
      console.error("[API] GET /api/products failed:", msg);
      throw new Error(msg);
    }
  }
  export async function createProduct(data) {
    const url = `/api/products`;
    console.log("[API] POST →", api.defaults.baseURL + url);
    try {
      const res = await api.post(url, data);
      console.log(`[API] POST /api/products status:`, res.status);
      return null;
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Unknown error";
      console.error(`[API] POST /api/products failed:`, msg);
      throw new Error(msg);
    }
  }
  export async function updateProductById(id, data) {
    const url = `/api/products/${id}`;
    console.log("[API] PUT →", api.defaults.baseURL + url, "body:", data);
    try {
      const res = await api.put(url, data);
      console.log(`[API] PUT /api/products/${id} status:`, res.status);
      return res.status === 204 ? null : res.data;
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Unknown error";
      console.error(`[API] PUT /api/products/${id} failed:`, msg);
      throw new Error(msg);
    }
  }

  export async function deleteProductById(id) {
    const url = `/api/products/${id}`;
    console.log("[API] DELETE →", api.defaults.baseURL + url);
    try {
      const res = await api.delete(url);
      console.log(`[API] DELETE /api/products/${id} status:`, res.status);
      return null;
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Unknown error";
      console.error(`[API] DELETE /api/products/${id} failed:`, msg);
      throw new Error(msg);
    }
  }
  