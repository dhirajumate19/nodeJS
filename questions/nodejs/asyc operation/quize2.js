function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function processData() {
  try {
    console.log("Start processing...");
    const data = await fetchData();
    console.log(data);
    console.log("Processing complete.");
  } catch (error) {
    console.error("Error while processing:", error);
  }
}

processData();
console.log("End of script.");
