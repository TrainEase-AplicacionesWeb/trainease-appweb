<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-plus" class="p-mr-2" label="Add" />
      <Button icon="pi pi-print" class="p-mr-2" label="Print" />
      <Button icon="pi pi-upload" label="Upload" />
    </template>

    <template #center>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText placeholder="Search" />
      </span>
    </template>

    <template #end>
      <SplitButton label="Save" :model="items"></SplitButton>
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import SplitButton from 'primevue/splitbutton';

export default {
  components: {
    Toolbar,
    Button,
    InputText,
    SplitButton
  },
  data() {
    return {
      items: [
        { label: 'Update', icon: 'pi pi-refresh' },
        { label: 'Delete', icon: 'pi pi-times' }
      ]
    };
  }
}
</script>

<style scoped>
/* Tus estilos aquí */
</style>
