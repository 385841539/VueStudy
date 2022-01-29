import tsp from './testpromise.js'

console.log("tsp")

test()

console.log("---22222")

async function test() {
    var { data: res } = await tsp.testP(true)

    console.log(res)
    //    .then((value) => {

    //         console.log("value---")
    //         console.log(value)

    //     })

}