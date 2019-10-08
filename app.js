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