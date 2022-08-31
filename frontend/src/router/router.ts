import { createRouter, createWebHistory } from "vue-router";
import PostsOverviewContainer from "../components/PostsOverview/container/PostsOverviewContainer.vue";
import PostDetailContainer from "../container/PostDetailContainer.vue";

const routes = [
  {
    path: "/posts",
    name: "posts",
    component: PostsOverviewContainer,
  },
  {
    path: "/posts/:slug",
    name: "postDetail",
    component: PostDetailContainer,
  },
  {
    path: "/category/:slug",
    name: "categoryPosts",
    component: PostsOverviewContainer,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
