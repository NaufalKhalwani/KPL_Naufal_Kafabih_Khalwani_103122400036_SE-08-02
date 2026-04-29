require('dotenv').config();

const delay = ms => new Promise(res => setTimeout(res, ms));

async function ambilKutipan(retry = 10) {
    try {
        const response = await fetch(process.env.BASE_API, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status === 429) {
            if (retry > 0) {
                console.log("Kena rate limit, retry dalam 3 detik...");
                await delay(3000);
                return ambilKutipan(retry - 1);
            } else {
                throw new Error("Terlalu banyak request (429)");
            }
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.data);

    } catch (e) {
        console.log("Error:", e.message);
    }
}

ambilKutipan();