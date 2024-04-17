async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

function processData() {
  fetchData().then((data) => {
    console.log("Data received:", data);
  });
  console.log("Processing data...");
}

processData();
console.log("End of script.");
