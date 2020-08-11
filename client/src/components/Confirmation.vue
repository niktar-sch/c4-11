<template>
  <div>
    <b-alert :variant="variant"
             :show="showConfirmation"
             dismissible
             @dismissed="showConfirmation=false"
    >
        {{ message }}
    </b-alert>
  </div>
</template>

<script>
export default {
  props: ['message', 'variant', 'showConfirmation'],
};
</script>
