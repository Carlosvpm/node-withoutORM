const express = require("express");

import "./database/runMigrations";
const PORT = 8000;

const app = express();

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
