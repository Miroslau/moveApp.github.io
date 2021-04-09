<template>
    <div class="pagination-container">
        <div class="page"
             v-for="page in pages.slice(page-1, page+5)"
             :key="page"
             @click="pageClick(page)"
        >
        {{page}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['allMoves'],

    data() {
        return {
            pages: [],
            page: 1,
        };
    },

    methods: {
        pageClick(page) {
            this.$emit('newPage', page);
        },
    },

    computed: {
        pages() {
            let pageNumber = Math.ceil(this.allMoves.totalResults / 10);
            for (let index = 1; index <= pageNumber; index++) {
                this.pages.push(index);
            }

            return this.pages;
        },
    },
}
</script>

<style lang="scss" scoped>
    .pagination-container {
        display: flex;
        justify-content: space-around;
    }

    .page {
        padding: 8px;
        border: 1px solid #e7e7e7;
        margin-right: 10px;
        margin-top: 30px;
        cursor: pointer;
    }

    .page:hover {
        background: #aeaeae;
        color: white;
    }
</style>