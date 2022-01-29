class Testpromise {



    testP(showLoading) {
        console.log(showLoading)
        var promise = new Promise(function (resolve, reject) {
            // 异步处理
            // 处理结束后、调用resolve 或 reject

            setTimeout(function () {
                resolve({ data: "成功!" }); //代码正常执行！
            }, 250);
        });

        return promise

    }




}
export default new Testpromise()

// console.log(test)

// export default 111