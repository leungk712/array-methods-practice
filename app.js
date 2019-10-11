const languages = [
    {id: 1, favLanguage: 'JavaScript'},
    {id: 2, favLanguage: 'Python'},
    {id: 3, favLanguage: 'TypeScript'},
    {id: 4, favLanguage: 'HTML'},
    {id: 5, favLanguage: 'Django'},
    {id: 6, favLanguage: 'C++'},
    {id: 7, favLanguage: 'CSS'},
    {id: 8, favLanguage: 'React'},
    {id: 9, favLanguage: 'Angular'},
    {id: 10, favLanguage: 'Vue'},
    {id: 11, favLanguage: 'PHP'},
    {id: 12, favLanguage: 'WordPress'},
    {id: 13, favLanguage: 'Go'},
    {id: 14, favLanguage: 'Ruby'},
    {id: 15, favLanguage: 'Java'},
];

// Filter Array

const filterArray = languages.filter((item) => {
    return item.id % 3 === 0;
});

console.log(filterArray);

// Map Array

const mapArray = languages.map((item) => {
    return item.favLanguage;
});

console.log(mapArray);

/* Find Array
- This returns true/false for each item until it finally
finds something that matches (true) */

const findArray = languages.find((item) => {
    return item.favLanguage === 'Ruby';
});

console.log(findArray);

// forEach (this does not return anything)

languages.forEach((item) => {
    console.log(item.id); 
    // this will print out every single item that we specify inside the array
});


// Some Array (only checks 1 item)

const hasIdLessThan10Some = languages.some((item) => {
    return item.id <= 4;
});

console.log(hasIdLessThan10Some); // returns true

// Every Array

const hasIdLessThan10Every = languages.every((item) => {
    return item.id <= 10;
    // this will check every item in the array to see if the id is <10
});

console.log(hasIdLessThan10Every); // returns false

// Reduce Array