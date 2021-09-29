First run `npm install`

## To run with dapr:

`dapr run --app-id express-app --app-port 3001 --dapr-http-port 3500 node index.js`

Running: `curl http://localhost:3001/test`

...returns: `hello world`

Running: `curl http://localhost:3500/v1.0/invoke/express-app/method/test`

...returns: `hello world`

## To run without dapr:

Run: `node index.js`

Running: `curl http://localhost:3001/test`

...returns `hello world`
