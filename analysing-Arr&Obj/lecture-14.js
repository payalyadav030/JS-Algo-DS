// Big-O of Object Methods:

// Eg:
let instructor = {
    firstname:"payal",
    isInstructor: true,
    favoritesNumber: [1,2,3,4]
}
console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty("firstname"))