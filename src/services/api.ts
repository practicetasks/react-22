import type {Category, Product} from "../types.ts";

const BASE_URL = 'https://practicetasks.kz/api';

function request<T>(path: string, req?: RequestInit): Promise<T> {
    return fetch(BASE_URL + path, {method: req?.method ?? 'GET', body: req?.body ?? ''})
        .then(resp => {
            // 400
            if (!resp.ok) {
                throw new Error('')
            }
            return resp.json();
        })
        .then(data => data as T)
}

export function getAllCategories(): Promise<Category[]> {
    return request<Category[]>('/categories')
        .then((categories: Category[]) => {
            return categories;
        });
}

export function getAllProducts(): Promise<Product[]> {
    return request<Product[]>('/products')
        .then((products: Product[]) => {
            return products;
        });
}

export function createCategory(name: string) {
    return request<Category>('/categories', {method: "POST", body: JSON.stringify({name})})
        .then((category: Category) => {
            return category
        })
}
