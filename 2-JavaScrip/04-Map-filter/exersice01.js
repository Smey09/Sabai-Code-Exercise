function handleFilterArr(getUser){
    let arrfilter = getUser.filter(user=>user.age>18)
    return arrfilter
}

// arr declearation
const arrUser = [
    {
        name:"Sothea Mab",
        age:18
    },{
        name:"Reaksmey Roem",
        age:19
    },{
        name:"Sothea Len",
        age:20
    }
];

const filterArr = handleFilterArr(arrUser);
console.log(`New arr : `,filterArr);
