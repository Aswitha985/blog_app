// frontend/src/app/services/blog.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseURL = 'http://localhost:5000/blogs';

  getBlogs() {
    return axios.get(this.baseURL);
  }

  createBlog(blog: any) {
    return axios.post(this.baseURL, blog);
  }

  updateBlog(id: string, blog: any) {
    return axios.put(`${this.baseURL}/${id}`, blog);
  }

  deleteBlog(id: string) {
    return axios.delete(`${this.baseURL}/${id}`);
  }
}
