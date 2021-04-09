export default {
    state: {
        moves: []
    },
    mutations: {
        updateMoves(state, moves) {
            state.moves = moves;
        },
    },
    actions: {
        async fetchMoves(context, state) {
            const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${state.currentMove}&page=${state.currentPage}`);
            const moves = await res.json();
            setTimeout(()=> state.loading = false, 1000);

            context.commit('updateMoves', moves);
        },
    },
    getters: {
        allMoves(state) {
            return state.moves;
        }
    },
}