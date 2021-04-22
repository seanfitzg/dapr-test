To run with dapr:
dapr run --app-id express-app --app-port 80 --dapr-http-port 3500 node index.js

To run without dapr:

```
node index.js
```

Then:

```
curl http://localhost:3001/test
```

returns `hello world`
