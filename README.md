# Weather App Backend

This repository contains the backend code for a weather application. It's built using Node.js and Express and serves weather data fetched from the OpenWeather API. The frontend is developed using EJS templating to interact with the backend.

## Overview

The server is designed to handle requests for current weather data based on a city name. It uses Axios to make API calls to OpenWeather and then sends the response back to the client. The frontend uses EJS for rendering the weather data in a user-friendly format.

### Features

- Fetch current weather data using city name.
- Render weather data on the frontend using EJS templates.
- Error handling for API requests.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- An API key from OpenWeather

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Fernando9200/Weather-Flutter-App-Backend.git
```
2. Navigate to the project directory:
```bash
cd Weather-Flutter-App-Backend
```
3. Install the dependencies:
```bash
npm install
```
4. Create a `.env` file in the project root and add your OpenWeather API key:
```bash
OPENWEATHER_API_KEY=[Your API Key Here]
```
### Running the Application

1. Start the server with the following command:
```bash
npm run server
```
2. Open a web browser and navigate to `http://localhost:3000` or `http://192.168.x.x:3000` (in case you prefer to use the local IP address of your machine)  to view the application.

### Using the Application

- Enter a city name in the input field and submit to fetch and display the current weather data.

## For Flutter App

This backend is designed to work in conjunction with a Flutter frontend application. But for this to work, ensure that the Flutter app is correctly configured to make requests to `http://localhost:3000/weather` for fetching weather data.

## Contributing

Contributions to improve the backend or the integration with the Flutter app are welcome. Please feel free to submit pull requests or create issues for bugs or feature requests.
