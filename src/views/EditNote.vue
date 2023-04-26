<template>
    <div class="edit-note">
        <Form v-model="text" buttonText="Update note" @change-note="onEditNote" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Form from '@/components/Form.vue';
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref } from 'vue';
const router = useRouter();
const text = ref<string>("");
const store = useNotesStore();
const { resetSingleNote, updateNote } = store;

const { singleNote } = storeToRefs(store);
const onEditNote = () => {
    if (singleNote.value) {
        updateNote(singleNote.value.id, text.value);
        router.push('/');
    }
}
onMounted(() => {
    if (singleNote && singleNote.value) {
        text.value = singleNote.value.content
    }
});
onUnmounted(() => {
    resetSingleNote();
});
</script>