async function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve("Data for ID 1");
      } else {
        reject(new Error("Invalid ID"));
      }
    }, 1000);
  });
}

async function processData() {
  try {
    console.log("Start processing...");
    const data1 = await fetchData(1);
    console.log(data1);
    const data2 = await fetchData(2);
    console.log(data2);
    console.log("Processing complete.");
  } catch (error) {
    console.error("Error while processing:", error.message);
  }
}

processData();
console.log("End of script.");
