import { createRouter, createWebHistory } from "vue-router";
import NotesView from "@/views/NotesView.vue";
import NotesStats from "@/views/NotesStats.vue";
import EditNote from "@/views/EditNote.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: NotesView,
    },
    {
      path: "/notes/edit/:id",
      name: "edit-note",
      component: EditNote,
    },
    {
      path: "/stats",
      name: "stats",
      component: NotesStats,
    },
  ],
});
export default router;
