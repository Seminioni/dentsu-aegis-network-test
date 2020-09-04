<template>
  <div>{{entity}} not found</div>
</template>

<script>
  export default {
    props: {
      entity: {
        default: 'Page',
      },
    },

    name: 'NotFound',
  };
</script>
