//const arrayPoke: any = []
const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

// const vectorPokemonAlreadyGuessed = (min: number, max: number) => {
//    const randomNumber = getRandomNumber(min, max)
//    if (arrayPoke.length === (min - max)) {
//       return console.log('limite')
//    }

//    !arrayPoke.includes(randomNumber) ? arrayPoke.push(randomNumber) : vectorPokemonAlreadyGuessed(min, max)

//    return arrayPoke
// }

function setRangeGenerationPokemons(value: number) {
   let minMaxValues = {
      min: 0,
      max: 0
   }

   switch (value) {
      case 1:
         minMaxValues.max = 151
         return minMaxValues
      case 2:
         minMaxValues.min = 152
         minMaxValues.max = 251
         return minMaxValues
      case 3:
         minMaxValues.min = 252
         minMaxValues.max = 386
         return minMaxValues
      case 4:
         minMaxValues.min = 387
         minMaxValues.max = 493
         return minMaxValues
      case 5:
         minMaxValues.min = 494
         minMaxValues.max = 649
         return minMaxValues
      // case 6:
      //    minMaxValues.min = 650
      //    minMaxValues.max = 721
      //    return minMaxValues
      // case 7:
      //    minMaxValues.min = 722
      //    minMaxValues.max = 809
      //    return minMaxValues
      // case 8:
      //    minMaxValues.min = 810
      //    minMaxValues.max = 898
      //    return minMaxValues
      case 10:
         minMaxValues.max = 649 //898
         return minMaxValues
      default:
         minMaxValues.min = 0
         minMaxValues.max = 0
         return minMaxValues
   }
}


//vectorPokemonAlreadyGuessed
export { setRangeGenerationPokemons, getRandomNumber }