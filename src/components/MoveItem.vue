<template>
    <div class="card">
        <img class="image" :src="move.Poster" alt="poster"/>
        <div class="description">
            <ul>
                <li>Name: {{move.Title}}</li>
                <li>Year: {{move.Year}}</li>
                <li>imdbID: {{move.imdbID}}</li>
                <li>Type: {{move.Type}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['move'],
}
</script>

<style lang="scss" scoped>
    .image {
        width: 250px;
        height: auto;
    }

    .description > ul {
        list-style: none;
        padding: 0;
    }

    .description > ul > li {
        padding-top: 15px;
    }

    .description > ul > li:last-child {
        padding-bottom: 20px;
    }

    .description > ul > li:first-child {
        padding-top: 5px;
    }
</style>