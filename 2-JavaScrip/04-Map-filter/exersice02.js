function filterUniqueItem(getArrNumber){
    let uniqueArrNumber = getArrNumber.filter((value,index,self)=>{
        return self.indexOf(value) === index;
    })
    return uniqueArrNumber
}

let arrNumber = [1,1,2,2,3,3,4,4,5,6,7,8,9]
const uniqueItem = filterUniqueItem(arrNumber)
console.log(uniqueItem);