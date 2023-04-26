<template>
<table class="table is-fullwidth is-hoverable">
  <thead>
    <tr>
      <th>Stat</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Number of notes</th>
      <td>
        {{ notesCount }}
      </td>
    </tr>
    <tr>
      <th>Number of all characters (All notes)</th>
      <td>
        {{ charactersCount }}
      </td>
    </tr>
  </tbody>
</table>
</template>

<script setup lang="ts">
    defineProps({
        notesCount:{
            type: Number,
            default: 0
        },
        charactersCount:{
            type: Number,
            default: 0
        }
    });
</script>