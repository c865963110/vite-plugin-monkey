export {};
const test = () => {
  let a = 0;
  const x = () => {
    a++;
    console.log(a);
  };
  return { x };
};

test().x();

const response = await fetch(
  `https://cdn.jsdelivr.net/npm/vite@4.1.4/package.json`,
);

console.log(await response.json());
