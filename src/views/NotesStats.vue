<template>
    <div class="Stats">
        <h1 class="is-size-4 mb-3">Stats</h1>
        <Table :notes-count="notes.length" :characters-count="getAllCharactersLength" />
        <input class="input" type="text" placeholder="Do you love Noteballs?" v-model="text" v-focus>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { vFocus } from '@/directives/autoFocus';
import { useNotesStore } from "@/stores/notes";
import { storeToRefs } from "pinia";
import Table from "@/components/stats/Table.vue";
const text = ref("");
const store = useNotesStore();
const { notes, getAllCharactersLength } = storeToRefs(store);
</script>