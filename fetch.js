try {
    // Code that may throw an error
    let result = 10 / 2;
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
}

//let number
function checkPositiveNumber(number) {
    if (number < 0) {
        throw new Error("The number must be positive.");
    }
    return number;
}

try {
    console.log(checkPositiveNumber(-5));
} catch (error) {
    console.error("Caught an error:", error.message);
}


// Example URL for demonstration
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Fetch data from the URL
fetch(url)
  .then(response => {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then(data => {
    // Handle the data from the response
    console.log('Data:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  })
  .finally(() => {
    // Code that runs regardless of success or failure
    console.log('Fetch attempt finished.');
  });

