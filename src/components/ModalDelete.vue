<template>
    <div class="modal is-active p-2">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete note?</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button class="button" @click="closeModal">Cancel</button>
                <button class="button is-danger" @click="handleDelete">Delete</button>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
        required: true
    }
});
const emits = defineEmits([
    "update:modelValue",
    "deleteNote"
]);

const closeModal = () => {
    emits('update:modelValue', false);
}

const handleKeyboard = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeModal();
}
const handleDelete = () => {
    emits('deleteNote');
}

onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
});
onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard);
})
</script>