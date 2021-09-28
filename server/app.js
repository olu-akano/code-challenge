const express = require('express');
const app = express();
const port = 5501;

app.listen(port, () => console.log(`Express is running on port ${port}`))

const cors = require('cors');
app.use(cors());