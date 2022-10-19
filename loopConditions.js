let obj = [{
        person: 'Shiva',
        age: '2',
        company: 'Guvi'
    },
    {
        person: 'Raghav',
        age: '7',
        company: 'Guvi Geek'
    },
    {
        person: 'Ramesh',
        age: '10',
        company: 'Guvi Geek Networks'
    }
];

// for loop
console.log('\n\nFor loop');
for (let i = 0; i < obj.length; i++) {
    console.log(`
person: ${obj[i].person}
age: ${obj[i].age}
company: ${obj[i].company}`);
}

//for in loop
console.log('\n\nFor in loop');
for (let i in obj) {
    console.log(`
person: ${obj[i].person}
age: ${obj[i].age}
company: ${obj[i].company}`);
}

// for of loop
console.log('\n\nFor of loop');
for (let i of obj) {
    console.log(`
person: ${i.person}
age: ${i.age}
company: ${i.company}`);
}

// for each loop 
console.log('\n\nFor each loop');
obj.forEach((i) => {
    console.log(`
person: ${i.person}
age: ${i.age}
company: ${i.company}`);
})