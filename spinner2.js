setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

const sentence = "|/-\\|/-\\|";
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);

  }, i += 200);
  if (i === sentence.length * 200) {
    setTimeout(() => {
      process.stdout.write('\n');

    }, sentence.length * 200);
  

  }
  
}