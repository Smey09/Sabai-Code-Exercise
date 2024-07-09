function dateFormat(getDatesting){
    const tranformDate = getDatesting.map(date=>{
        let parts = date.split('-')
        return `${parts[2]}/${parts[1]}/${parts[0]}`
    })

    return tranformDate
}

// simple array
const dateString = ["2024-01-01","2025-02-02","2026-03-03"]
const resultFormated = dateFormat(dateString)

console.log(resultFormated);