
  let wakeDog =function(dogName, dogBreed){console.log(`Wake ${dogName} the ${dogBreed}`);
return `Wake ${dogName} the ${dogBreed}`}

 let leashDog =function(dogName, dogBreed){console.log(`Leash ${dogName} the ${dogBreed}`);}
 let walkToPark= function(dogName,dogBreed){console.log(` Walk ${dogName} the ${dogBreed}`);}
   let throwFrisbee= function(dogName,dogBreed){console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);}
  let walkHome =function(dogName,dogBreed){console.log(`Walk home with ${dogName} the ${dogBreed}`);}
  let unleashDog= function(dogName,dogBreed){console.log(`Unleash ${dogName} the ${dogBreed}`);}

const routine= [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
function exerciseDog(dogName, dogBreed){return routine.map(fn=>fn(dogName,dogBreed))}

var walkToPark = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}
