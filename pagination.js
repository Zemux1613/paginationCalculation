let a = [];

for (let i = 0; i < 100; i++) {
    a[i] = i;
}

function getPageItems(page) {
    let res = [];
    const limit = 15;

    for(let start = ((page-1) * limit); start < page*limit; start++){
        res.push(a[start]);
    }

    return res;
}

console.log(getPageItems(1));
console.log(getPageItems(2));