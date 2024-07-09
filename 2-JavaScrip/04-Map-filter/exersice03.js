function handleName(getUser){
    let filterNameUser = getUser.map(user=>user.name)
    return filterNameUser
}

// define array
const arrUsers = [
    {name:"Sothea Mab",age:18},
    {name:"Reamsmey Roem",age:21},
    {name:"Yem Somoun",age:20}
]

const afterFilter = handleName(arrUsers)
console.log(afterFilter);