//iteracion de arreglos 

const tecnologias=["html", "css", "javascript", "react", "node.js"]


//foreach - Acceder a cada elemento del array
const arrayForeach=tecnologias.forEach(function(tech){
   return (tech)
})

//map - permite crear un nuevo array
const arraryMap=tecnologias.map(function(tech){
    return (tech)
})

//con for of

const arrayFor=[]
for (const tech of tecnologias) {
    arrayFor.push(tech)
}

console.log(arrayFor)
console.log(arrayForeach)
console.log(arraryMap)
