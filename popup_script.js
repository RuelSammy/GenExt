// Define your API key 
const apiKey = '7b6a6926e071434b8ac0a9eac8bb904d';

// Create a context menu item for checking emails
browser.contextMenus.create({
  id: "checkEmail",
  title: "Check Email with HIBP",
  contexts: ["editable"],
});

// Create a context menu item for checking passwords
browser.contextMenus.create({
  id: "checkPassword",
  title: "Check Password with HIBP",
  contexts: ["password"],
});

// Add click event listener to handle context menu item clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "checkEmail") {
    checkWithHIBP(info.selectionText, "email");
  } else if (info.menuItemId === "checkPassword") {
    checkWithHIBP(info.selectionText, "password");
  }
});

// Function to check with HIBP
function checkWithHIBP(value, type) {
  // Make API request with the value
  fetch(`https://haveibeenpwned.com/api/v3/${type}/${value}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}` // Use Authorization header with API key
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => handleResponse(data))
  .catch(error => {
    console.error("Error:", error);
    // Provide user feedback for failed API request
    alert("Failed to check with HIBP. Please try again later.");
  });
}

// Function to handle API response
function handleResponse(data) {
  if (data && data.pwned) {
    // If the response indicates that the email/password has been compromised
    console.log(`The email/password has been found in ${data.pwned} data breaches.`);
    alert(`The email/password has been found in ${data.pwned} data breaches.`);
  } else {
    // If the response indicates that the email/password has not been compromised
    console.log("The email/password has not been found in any known data breaches.");
    alert("The email/password has not been found in any known data breaches.");
  }
}
