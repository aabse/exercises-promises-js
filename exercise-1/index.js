function job() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  });
}

job().then((data) => {
  console.log(data);
});

module.export = job;
