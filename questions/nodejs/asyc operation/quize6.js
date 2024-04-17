async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

async function processData() {
  try {
    console.log("Start processing...");
    const data1 = await fetchData("https://api.example.com/data/1");
    console.log(data1);
    const data2 = await fetchData("https://api.example.com/data/2");
    console.log(data2);
    console.log("Processing complete.");
  } catch (error) {
    console.error("Error while processing:", error.message);
  }
}

processData();
console.log("End of script.");
