<script>
export default {
  props: {
    itemList: {
      type: Object,
      required: true
    }
  },
  setup (_, { emit }) {
    const onPageClick = (url) => {
      const found = url.match(/.+page=(\d+)/i)
      emit('onpageclick', found[1]);
    }

    return { onPageClick }
  }
}
</script>

<template>
  <nav aria-label="...">
    <ul class="pagination pagination-sm">
      <li class="page-item" v-for="link in itemList.links">
        <span class="page-link" @click="onPageClick(link.url)" v-if="!link.active && link.url" role="button" v-html="link.label"></span>
        <span class="page-link" v-else v-html="link.label"></span>
      </li>
    </ul>
  </nav>
</template>

