import api from "../../config/api";

export async function getAllBlogPosts(queryString = "") {
  const url = `/api/v1/blogposts${queryString ? `?${queryString}` : ""}`;
  console.log("[API] GET →", api.defaults.baseURL + url);

  try {
    const res = await api.get(url);
    const body = res.data;
    console.log("[API] 200 GET /api/v1/blogposts payload:", body);

    // Server trả về: { code, success, message, data: { rowDatas: [...] } }
    if (body.data?.rowDatas && Array.isArray(body.data.rowDatas)) {
      return body.data.rowDatas;
    }

    // Trường hợp khác
    if (Array.isArray(body)) {
      return body;
    }
    if (body.data?.items && Array.isArray(body.data.items)) {
      return body.data.items;
    }
    if (body.data?.data && Array.isArray(body.data.data)) {
      return body.data.data;
    }

    console.warn("[API] Unexpected format, returning []:", body);
    return [];
  } catch (err) {
    const msg =
      err.response?.data?.message ||
      err.response?.data ||
      err.message ||
      "Unknown error";
    console.error("[API] GET /api/v1/blogposts failed:", msg);
    throw new Error(msg);
  }
}

export async function createBlogPosts(data) {
  const url = `/api/v1/blogposts`;
  console.log("[API] POST →", api.defaults.baseURL + url);
  try {
    const res = await api.post(url, data);
    console.log(`[API] POST /api/v1/blogposts status:`, res.status);
    return res.data;
  } catch (err) {
    const msg =
      err.response?.data?.message ||
      err.response?.data ||
      err.message ||
      "Unknown error";
    console.error(`[API] POST /api/v1/blogposts failed:`, msg);
    throw new Error(msg);
  }
}

export async function updateBlogPostsById(id, data) {
  const url = `/api/v1/blogposts/${id}`;
  console.log("[API] PUT →", api.defaults.baseURL + url, "body:", data);
  try {
    const res = await api.put(url, data);
    console.log(`[API] PUT /api/v1/blogposts/${id} status:`, res.status);
    return res.status === 204 ? null : res.data;
  } catch (err) {
    const msg =
      err.response?.data?.message ||
      err.response?.data ||
      err.message ||
      "Unknown error";
    console.error(`[API] PUT /api/v1/blogposts/${id} failed:`, msg);
    throw new Error(msg);
  }
}

export async function deleteBlogPostsById(id) {
  const url = `/api/v1/blogposts/${id}`;
  console.log("[API] DELETE →", api.defaults.baseURL + url);
  try {
    const res = await api.delete(url);
    console.log(
      `[API] DELETE /api/v1/blogposts/${id} status:`,
      res.status
    );
    return null;
  } catch (err) {
    const msg =
      err.response?.data?.message ||
      err.response?.data ||
      err.message ||
      "Unknown error";
    console.error(
      `[API] DELETE /api/v1/blogposts/${id} failed:`,
      msg
    );
    throw new Error(msg);
  }
}
