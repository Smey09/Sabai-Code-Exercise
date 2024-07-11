async function exampleAsync() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise;
  console.log(result); // "done!"
}

exampleAsync();
