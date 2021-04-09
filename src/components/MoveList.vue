<template>
    <div class="list">
        <div v-for="move in allMoves.Search" :key="move.imdbID">
            <moveitem :move="move"></moveitem>
        </div>
    </div>
</template>

<script>
import Moveitem from '../components/MoveItem.vue';
export default {
    components: {
        Moveitem,
    },

    props: ['allMoves'],
}
</script>

<style lang="scss" scoped>
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media(min-width: 768px) and (max-width: 1279px) {
        .list {
            align-items: center;
        }
        .list > div {
            flex-basis: 50%;
        }
    }

    @media(min-width: 320px) and (max-width: 767px) {
        .list {
            justify-content: center;
            align-items: center;
        }
    }
</style>