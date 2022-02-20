const myPromise = new Promise((resolve, reject) => {
  if (true) resolve("I have succeeded");
  else reject("I have failed");
});

myPromise.then((value) => `${value} !!!!`).then((newValue) => console.log(newValue)).catch((err) => console.log(err));
