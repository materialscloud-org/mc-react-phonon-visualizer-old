# Interactive phonons visualizer

This repository houses the Materials Cloud interactive phonons visualizer React app.

### Development

- clone this repo
- install `node.js` (includes `npm`) from [official site](https://nodejs.org/)
- install dependencies with `npm install`
- install backend dependencies with `pip install -r requirements.txt`
- launch the backend with `python api/app.py`
- launch the app with `npm start`


#### Running on docker
The project contains client and server stacks to containerize the application
You can run the full stack application on a Docker install machine typing 
`docker compose up ` 
on the terminal. You can reach to content via localhost:8080 port.