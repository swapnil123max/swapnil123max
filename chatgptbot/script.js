import fetch from 'node-fetch';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

let messages = [];

const rl = readline.createInterface({ input, output });

async function fetchApiResponse(input) {
    messages.push({
        role: 'user',
        content: input
    });

    const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';

    const headers = {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'bfc752120cmsh8332e41c4ea7dbdp1bd2c0jsnd1d0f4ed82bc',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
    };

    const requestBody = {
        messages: messages,
        web_access: true,
        stream: false
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        const parsedResult = JSON.parse(result);

        // Process the API response here (parsedResult)
        console.log(parsedResult);
    } catch (error) {
        console.error(error);
    }
}

rl.on('line', (input) => {
    fetchApiResponse(input);
    console.log(`Received: ${input}`);
});
