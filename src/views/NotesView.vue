<template>
    <div class="notes">
        <h1 class="is-size-4 mb-3">Notes</h1>
        <Form
            v-model="text"
            @change-note="onAddNote"
         />
        <div class="cards">
            <template v-for="note in notes" :key="note.id">
                <NoteCard 
                :card="note"
                @delete-note="deleteNoteHandler(note.id)"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import Form from '@/components/Form.vue';
import NoteCard from '@/components/cards/NoteCard.vue';
import {useNotesStore} from '@/stores/notes';
import { storeToRefs } from 'pinia'
// Imports

const text = ref("");

// Store
const notesStore = useNotesStore();
const {notes} = storeToRefs(notesStore);
const {addNote, deleteNote} = notesStore;


const onAddNote = () => {
    addNote(text.value);
    text.value = "";
}

const deleteNoteHandler = (idToDelete: number) => {
    deleteNote(idToDelete);
}
</script>

<style scoped lang="scss">

</style>