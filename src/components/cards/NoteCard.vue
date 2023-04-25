<template>
    <div class="card mb-5">
        <div class="card-content">
            <div class="content">
                <div>{{ card.content }}</div>
                <div class="has-text-right has-text-grey-light">
                    <small>
                        {{ charactersLength }}
                    </small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item" @click.prevent="goToEdit">Edit</a>
            <a href="#" class="card-footer-item" @click.prevent="handleDelete">Delete</a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { useRouter } from 'vue-router';
import { useNotesStore } from '@/stores/notes';
import type { Note } from '@/types/notes';

const store = useNotesStore();
const {setSingleNote} = store;

const router = useRouter();

     const props = defineProps({
        card:{
            type: Object as PropType<Note>,
            required: true
        }
    });
    const emits = defineEmits(['delete-note']);
    const charactersLength = computed(()=>{
        const length = props.card.content.length;
        const description = length > 1? "characters":"character";
        return `${length} ${description}`;
    });

    const handleDelete = ()=>{
        emits('delete-note');
    }

    const goToEdit= () => {
        setSingleNote(props.card);
        router.push(`/notes/edit/${props.card.id}`);
    }
</script>