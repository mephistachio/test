function sorted(n) {
    let arr = [];
    for (i = 0; i < 20; i++) {
        arr[i] = Math.floor(Math.random() * 10000);
    }
    let sortedArr = arr.sort(function (a, b) {
        return (a - b)
    });
    for (i = 0; i < Math.min(n, sortedArr.length); i++)
          {
        console.log(sortedArr[i]);
    }
}
sorted(10)
