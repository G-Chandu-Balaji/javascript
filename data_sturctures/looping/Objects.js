const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//proerty names
const properties = Object.keys(openingHours);
let srt = `we are open on ${properties.length} days,`;
for (const day of properties) {
  srt += `${day},`;
}
console.log(srt);

//proerty values
const values = Object.values(openingHours);
console.log(values);

//entries

const entry = Object.entries(openingHours);
console.log(entry);

for (const [key, { open, close }] of entry) {
  console.log(` on ${key} day we open at ${open} and close at ${close}`);
}
