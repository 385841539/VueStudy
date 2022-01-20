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

            console.log("--value---")
            console.log(value)
            value.name === "home" ? (state.currentMune = null) : state.collaspseMenu = value

        }



    }


}