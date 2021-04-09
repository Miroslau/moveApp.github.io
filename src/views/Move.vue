<template>
    <div>
        <div class="search">
            <search @search-move="searcMove"></search>
        </div>
        <Loader v-if="currentState.loading" class="loader"/>
        <div v-else class="content">
            <div class="results">
                <h2>You searched for: {{currentState.currentMove}}, {{allMoves.totalResults}} found</h2>
            </div>
            <div class="move-list">
                <move-list :allMoves="allMoves"></move-list>
            </div>
            <div class="pagination">
                <pagination :allMoves="allMoves" @newPage="chosePage"/>
            </div>
        </div>
    </div>
</template>

<script>
import MoveList from '../components/MoveList.vue';
import Loader from '../components/Loader.vue';
import Search from '../components/Search.vue';
import Pagination from '../components/Pagination.vue';
import {mapGetters, mapActions} from 'vuex';
export default {

    computed: {
        ...mapGetters(["allMoves"]),
    },

    data() {
        return {
            currentState: {
                currentMove: 'Batman',
                currentPage: 1,
                loading: true,
            }
        };
    },

    methods: {
        ...mapActions(["fetchMoves"]),
        chosePage(page) {
            this.currentState.currentPage = page;
            this.currentState.loading = true;
            this.fetchMoves(this.currentState);
        },

        searcMove(move) {
            this.currentState.currentMove = move;
            this.currentState.loading = true;
            this.fetchMoves(this.currentState);
        }
    },

    components: {
        MoveList,
        Pagination,
        Search,
        Loader,
    },

    async mounted() {
        this.fetchMoves(this.currentState);
    },
}
</script>

<style lang="scss" scoped>
    .move-list {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding-top: 25px;
    }

    .search {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    }

    .results {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }

    .loader {
        max-width: 1200px;
        width: 100%;
        padding-top: 25px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .pagination {
        max-width: 300px;
        width: 100%;
        margin: 0 auto;
    }
</style>