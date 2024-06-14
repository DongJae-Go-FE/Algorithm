const sync = () => {
  console.log("비동기:::", "1");
  setTimeout(() => {
    console.log("비동기:::", "2");
  }, 2000);
  console.log("비동기:::", "3");
};

const async = async () => {
  console.log("동기:::", "1");
  await setTimeout(() => {
    console.log("동기:::", "2");
  }, 2000);
  console.log("동기:::", "3");
};
