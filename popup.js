// // Function to check email with HIBP
// // async function checkEmail() {
// //   const email = document.getElementById("emailInput").value;
// //   if (!email) {
// //     alert("Please enter an email.");
// //     return;
// //   }
// //   try {
// //     const response = await sendMessageToBackground('breachedaccount', email);
// //     handleResponse(response);
// //   } catch (error) {
// //     console.error("Error:", error);
// //     alert("Failed to check email with HIBP. Please try again later.");
// //   }
// // }

// // Function to check email with HIBP
// function checkEmail() {
//   const email = document.getElementById("emailInput").value;
//   if (!email) {
//     alert("Please enter an email.");
//     return;
//   }
//   sendMessageToBackground('breachedaccount', email)
//     .then(response => {
//       handleResponse(response);
//     })
//     .catch(error => {
//       console.error("Error:", error);
//       alert("Failed to check email with HIBP. Please try again later.");
//     });
// }

// // Function to check password with HIBP
// async function checkPassword() {
//   const password = document.getElementById("passwordInput").value;
//   if (!password) {
//     alert("Please enter a password.");
//     return;
//   }
//   try {
//     const response = await sendMessageToBackground('pwnedpassword', password);
//     handleResponse(response);
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Failed to check password with HIBP. Please try again later.");
//   }
// }

// // Function to send a message to the background script
// // async function sendMessageToBackground(service, parameter) {
// //   return new Promise((resolve, reject) => {
// //     chrome.runtime.sendMessage({ service, parameter }, (response) => {
// //       if (chrome.runtime.lastError) {
// //         reject(new Error(chrome.runtime.lastError.message));
// //       } else {
// //         resolve(response);
// //       }
// //     });
// //   });
// // }
// function sendMessageToBackground(service, parameter) {
//   return new Promise((resolve, reject) => {
//     chrome.runtime.sendMessage({ service, parameter }, (response) => {
//       if (chrome.runtime.lastError) {
//         reject(new Error(chrome.runtime.lastError.message));
//       } else {
//         resolve(response);
//       }
//     });
//   });
// }


// // Attach event listeners to check email and password buttons
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("checkEmailButton").addEventListener("click", checkEmail);
//   document.getElementById("checkPasswordButton").addEventListener("click", checkPassword);
// });


// Function to check email with HIBP
async function checkEmail() {
  const email = document.getElementById("emailInput").value;
  if (!email) {
    alert("Please enter an email.");  
    return;
  }
  try {
    const response = await sendMessageToBackground('breachedaccount', email);
    handleResponse(response);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to check email with HIBP. Please try again later.");
  }
}

// Function to check password with HIBP
async function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  if (!password) {
    alert("Please enter a password.");
    return;
  }
  try {
    const response = await sendMessageToBackground('pwnedpassword', password);
    handleResponse(response);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to check password with HIBP. Please try again later.");
  }
}

// Function to send a message to the background script
async function sendMessageToBackground(service, parameter) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ service, parameter }, (response) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(response);
      }
    });
  });
}

// Attach event listeners to check email and password buttons
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("checkEmailButton").addEventListener("click", checkEmail);
  document.getElementById("checkPasswordButton").addEventListener("click", checkPassword);
});
