const sync = () => {
  console.log("비동기:::", "1");
  setTimeout(() => {
    console.log("비동기:::", "2");
  }, 2000);
  console.log("비동기:::", "3");
};

const async = async () => {
  console.log("동기:::", "1");
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("동기:::", "2");
      resolve();
    }, 2000)
  );

  console.log("동기:::", "3");
};

new Promise((resolve, err) => {
  console.log("프로미스1");
  err();
})
  .then(() => {
    console.log("프로미스2");
  })
  .then(() => {
    console.log("프로미스3");
  }).catch(()=>{
    alert("에러")
  }).finally(()=>{
    alert("파이널리")
  });
