import express from 'express';
import { fileURLToPath } from 'url'; // Import the 'fileURLToPath' function
import path from 'path';
import fetch from 'node-fetch';

const app = express();
const port = 3000;
let messages = [];
const __filename = fileURLToPath(import.meta.url); // Get the filename of the current module
const __dirname = path.dirname(__filename); // Get the directory name from the filename
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Modify fetchApiResponse to push user messages into the array


// ... (other code remains the same)

// Modify the function to match the provided code structure
async function fetchApiResponse(input) {
    try {
        messages.push({
            role: 'user',
            content: input
        });

        console.log(messages);

        const url = 'https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'bfc752120cmsh8332e41c4ea7dbdp1bd2c0jsnd1d0f4ed82bc',
            'X-RapidAPI-Host': 'chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com'
        };

        const requestBody = {
            model: "gpt-3.5-turbo",
            messages: messages, // Include user messages

            temperature: 0.8
        };

        const requestOptions = {

            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody)
        };

        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return error;
    }
}



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post('/api', async (req, res) => {
    console.log(req.body);
    const mes = await fetchApiResponse(req.body.input)
    console.log(mes)

    res.json({ success: true, messages: mes });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

