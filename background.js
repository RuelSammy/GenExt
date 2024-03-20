// Define your API key
const apiKey = '620b68dcb7064d1fadba99e0b4865c0e';

// Function to make a request to the HIBP API
async function makeHIBPRequest(service, parameter) {
  const url = `https://haveibeenpwned.com/api/v3/${service}/${encodeURIComponent(parameter)}`;
  const headers = {
    'hibp-api-key': apiKey
  };

  try {
    console.log('Making request to:', url); // Log the URL being requested
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Received response:', data); // Log the response data
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Propagate the error for handling
  }
}

// Add event listener to handle messages from the popup script
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  try {
    const { service, parameter } = message;
    console.log('Received message:', message); // Log the received message
    const response = await makeHIBPRequest(service, parameter);
    console.log('Sending response:', response); // Log the response being sent
    sendResponse(response);
  } catch (error) {
    console.error('Error:', error);
    sendResponse({ error: error.message });
  }
});
