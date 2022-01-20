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
            console.log(item)


            if (item.name == "home") {
                state.currentMenu = null;
            } else {
                state.currentMenu = item;

                let result = state.tabLists.findIndex(nowItem => item.name == nowItem.name)

                result === -1 ? state.tabLists.push(item) : ""

            }


        }



    }


}