import { ref, onMounted, watch, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import type { Notes, Note } from "@/types/notes";

export const useNotesStore = defineStore("notes", () => {
  const notes = ref<Notes>([]);

  const singleNote = ref<Note | null>(null);

  const addNote = (content: string) => {
    notes.value.unshift({
      id: new Date().getTime(),
      content,
    });
  };

  const deleteNote = (idToDelete: number) => {
    notes.value = notes.value.filter((item) => item.id !== idToDelete);
  };

  const setSingleNote = (note: Note) => {
    singleNote.value = note;
  };
  const resetSingleNote = () => {
    singleNote.value = null;
  };

  const updateNote = (id: number, content: string) => {
    notes.value = notes.value.map((item) => {
      if (item.id === id) {
        item.content = content;
      }
      return item;
    });
  };

  const getAllCharactersLength = computed(()=>{
    return notes.value.reduce((accumulator, currentValue)=> accumulator + currentValue.content.length,0);
  });

  watch(
    notes,
    () => {
      localStorage.setItem("notes", JSON.stringify(notes.value));
    },
    { deep: true }
  );

  onMounted(() => {
    const localNotes = localStorage.getItem("notes");
    if (localNotes) {
      notes.value = JSON.parse(localNotes);
    }
  });
  return {
    notes,
    addNote,
    deleteNote,
    singleNote,
    setSingleNote,
    resetSingleNote,
    updateNote,
    getAllCharactersLength
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotesStore, import.meta.hot));
}
