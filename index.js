
  let wakeDog =function(dogName, dogBreed){console.log(`Wake ${dogName} the ${dogBreed}`);}
 var leashDog =function(dogName, dogBreed){console.log(`Leash ${dogName} the ${dogBreed}`);}
 var walkToPark= function(dogName,dogBreed){console.log(` Walk ${dogName} the ${dogBreed}`);}
 var  throwFrisbee= function(dogName,dogBreed){console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);}
 var walkHome =function(dogName,dogBreed){console.log(`Walk home with ${dogName} the ${dogBreed}`);}
 var unleashDog= function(dogName,dogBreed){console.log(`Unleash ${dogName} the ${dogBreed}`);}

const routine= [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
function exerciseDog(dogName, dogBreed){return routine.map(fn=>fn(dogName,dogBreed))}
