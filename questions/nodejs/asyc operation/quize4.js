function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://api.example.com/data") {
        resolve("Data fetched successfully");
      } else {
        reject(new Error("Invalid URL"));
      }
    }, 1500);
  });
}

async function processData() {
  try {
    console.log("Start processing...");
    const data1 = await fetchData("https://api.example.com/data");
    console.log(data1);
    const data2 = await fetchData("https://api.example.com/invalid");
    console.log(data2);
    console.log("Processing complete.");
  } catch (error) {
    console.error("Error while processing:", error.message);
  }
}

processData();
console.log("End of script.");
