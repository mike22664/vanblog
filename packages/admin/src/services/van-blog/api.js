// @ts-ignore

/* eslint-disable */
import { request } from 'umi';

export async function fetchAll(options) {
  return request('/api/admin/all', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function fetchInit(body) {
  return request('/api/admin/init', {
    method: 'POST',
    data: body,
  });
}
/** 登录接口 POST /api/login/account */

export async function login(body, options) {
  return request('/api/admin/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function createArticle(body) {
  return request('/api/admin/article', {
    method: 'POST',
    data: body,
  });
}

export async function deleteArticle(id) {
  return request(`/api/admin/article/${id}`, {
    method: 'DELETE',
  });
}

export async function getAllCategories() {
  return request(`/api/admin/category/all`, {
    method: 'GET',
  });
}
export async function updateSiteInfo(body) {
  return request(`/api/admin/meta/site`, {
    method: 'PUT',
    data: body,
  });
}
export async function createCategory(body) {
  return request(`/api/admin/category/`, {
    method: 'POST',
    data: body,
  });
}
export async function updateCategory(name, value) {
  return request(`/api/admin/category/${name}?value=${value}`, {
    method: 'PUT',
  });
}
export async function deleteCategory(name) {
  return request(`/api/admin/category/${name}`, {
    method: 'DELETE',
  });
}
export async function deleteDraft(id) {
  return request(`/api/admin/draft/${id}`, {
    method: 'DELETE',
  });
}
export async function createDraft(body) {
  return request(`/api/admin/draft`, {
    method: 'POST',
    data: body,
  });
}
export async function publishDraft(id, body) {
  return request(`/api/admin/draft/publish?id=${id}`, {
    method: 'POST',
    data: body,
  });
}
export async function createDonate(body) {
  return request(`/api/admin/meta/reward`, {
    method: 'POST',
    data: body,
  });
}
export async function updateLink(body) {
  return request(`/api/admin/meta/link`, {
    method: 'PUT',
    data: body,
  });
}
export async function deleteLink(name) {
  return request(`/api/admin/meta/link/${name}`, {
    method: 'DELETE',
  });
}
export async function createLink(body) {
  return request(`/api/admin/meta/link`, {
    method: 'POST',
    data: body,
  });
}
export async function updateDonate(body) {
  return request(`/api/admin/meta/reward`, {
    method: 'PUT',
    data: body,
  });
}
export async function deleteDonate(name) {
  return request(`/api/admin/meta/reward/${name}`, {
    method: 'DELETE',
  });
}
export async function updateSocial(body) {
  return request(`/api/admin/meta/social`, {
    method: 'PUT',
    data: body,
  });
}
export async function getSocialTypes() {
  return request(`/api/admin/meta/social/types`, {
    method: 'GET',
  });
}
export async function getTags() {
  return request(`/api/admin/tag/all`, {
    method: 'GET',
  });
}
export async function deleteSocial(name) {
  return request(`/api/admin/meta/social/${name}`, {
    method: 'DELETE',
  });
}
export async function updateArticle(id, body) {
  return request(`/api/admin/article/${id}`, {
    method: 'PUT',
    data: body,
  });
}
export async function updateDraft(id, body) {
  return request(`/api/admin/draft/${id}`, {
    method: 'PUT',
    data: body,
  });
}
export async function updateAbout(body) {
  return request(`/api/admin/meta/about`, {
    method: 'PUT',
    data: body,
  });
}