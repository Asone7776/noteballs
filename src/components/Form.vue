<template>
    <div class="card mb-5 has-background-success-dark">
        <div class="card-content">
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Add a new note" v-model=props.modelValue @input="onChangeValue"
                        ref="newNoteRef" v-focus></textarea>
                </div>
            </div>
            <div class="field is-grouped is-grouped-light is-justify-content-end">
                <div class="control">
                    <button @click="submitHandler" class="button is-link has-background-success" :disabled="!modelValue">{{
                        buttonText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { vFocus } from '@/directives/autoFocus';
const newNoteRef = ref<HTMLElement | null>(null);

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: false,
        default: 'Add new note'
    }
});

const emits = defineEmits(['update:modelValue', 'change-note']);

const onChangeValue = (event: Event) => {
    let target = event.target as HTMLInputElement;
    emits('update:modelValue', target.value);
}

const submitHandler = () => {
    emits('change-note');
    newNoteRef.value?.focus();
}
</script>