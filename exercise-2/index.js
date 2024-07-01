function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject("error");
    } else if (data % 2 != 0) {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    } else {
      setTimeout(() => {
        reject("even");
      }, 2000);
    }
  });
}

const test = (input) => {
  job(input).then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    },
  );
};

test("test");
test(3);
test(6);

module.exports = job;
