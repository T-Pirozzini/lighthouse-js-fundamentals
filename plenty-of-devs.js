function ageCalculator(name,yearOfBirth,currentYear){
  let person = name;
  let age = currentYear - yearOfBirth;
  return `${person} is ${age} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
