import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('http://localhost:5166/weatherforecast');
        const data = await response.json();
        console.log("Testhing");
        console.log(data.value);
        //setForecasts(data);
        //console.log("TestThing", data);

        //// Get raw text from the response
        //const text = await response.text();  // Get response as plain text (for debugging)
        //console.log("Raw Response:", text);  // Log the raw content of the response

        //// If it's JSON, you can parse it here
        //const data2 = JSON.parse(text);  // Manually parse JSON
        //console.log("Parsed Data:", data2);
        //console.log("Data Value:", data2.value);  // Access the value
    }
}

export default App;