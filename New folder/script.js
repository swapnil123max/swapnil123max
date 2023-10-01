// Check if the browser supports the Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Create a new SpeechRecognition object
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Configure the recognition settings
    recognition.continuous = true; // Continuously listen for speech
    recognition.interimResults = true; // Get interim results as the user speaks

    // Define event handlers for the recognition object

    // Called when the recognition service starts listening
    recognition.onstart = () => {
        console.log('Listening...');
    };

    // Called when the recognition service captures a result
    recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript;
        console.log('Result:', result);
    };

    // Called when an error occurs
    recognition.onerror = (event) => {
        console.error('Recognition error:', event.error);
    };

    // Start the recognition service
    recognition.start();

    // Stop the recognition service when needed
    // recognition.stop();
} else {
    console.log('Speech recognition not supported in this browser.');
}
