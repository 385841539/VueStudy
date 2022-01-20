export default {


    state: {

        isCollapse: false,
        currentMune: null

    },


    mutations: {

        collaspseMenu(state) {
            state.isCollapse = !state.isCollapse

        },
        selectMenu(state, value) {

            value.name === "home" ? (state.currentMune = null) : state.collaspseMenu = value

        }



    }


}