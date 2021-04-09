<template>
    <div class="search-container">
        <h1>Move Catalog</h1>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="title">
        </form>
        <div class="login">
            <img src="https://lh3.googleusercontent.com/proxy/zbTIMHWoGcIZPF7lo4Q91L30ufv1iGl4_ZtK14xICqcN8TGKE-dNDlqLjPfyZIz5wZI5FnnyraaNDrNaO7Ju_8gB22K0VYOWAuZFDEq4M0EiPFVHox_0eQ" alt="profile">
            <span>Miroslav Ryabikov</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Batman',
        };
    },

    methods: {
        onSubmit(move) {
            if (this.title.trim()) {
                move = this.title
                this.$emit('search-move', move);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    form {
        max-width: 800px;
        width: 100%;
    }

    .login {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 20px;
        height: 20px;
    }

    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    @media(min-width: 320px) and (max-width: 767px) {
        .lsearch-container {
            justify-content: center;
            align-items: center;
        }

        h1 {
            width: 100%;
            text-align: center;
        }

        .login {
            width: 100%;
            justify-content: center;
        }
    }
</style>