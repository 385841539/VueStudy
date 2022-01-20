export default {


    state: {

        isCollapse: false,
        currentMenu: null

    },


    mutations: {

        collaspseMenu(state) {
            state.isCollapse = !state.isCollapse

        },
        selectMenu(state, value) {

            console.log("--value---")
            console.log(value)
            value.name === "home" ? (state.currentMenu = null) : state.currentMenu = value

        }



    }


}