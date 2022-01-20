export default {


    state: {

        isCollapse: false,
        currentMenu: null,
        tabLists: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'

            }

        ]

    },


    mutations: {

        collaspseMenu(state) {
            state.isCollapse = !state.isCollapse

        },
        selectMenu(state, item) {

            console.log("--value---")
            console.log(value)


            if (item.name == "home") {
                state.currentMenu = null;
            } else {
                state.currentMenu = item;
                state.tabLists.add(item)
            }


        }



    }


}