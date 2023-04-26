<template>
    <div class="Stats">
        <h1 class="is-size-4 mb-3">Stats</h1>
        <Table
            :notes-count="notes.length"
            :characters-count="getAllCharactersLength"
        />
    </div>
</template>

<script setup lang="ts">
import { useNotesStore } from "@/stores/notes";
import { storeToRefs } from "pinia";
import Table from "@/components/stats/Table.vue";
    const store = useNotesStore();
    const {notes, getAllCharactersLength} = storeToRefs(store);
</script>