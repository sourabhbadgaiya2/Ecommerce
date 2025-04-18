import app from "./src/app.js";
import config from "./src/config/env.config.js";
import connectDB from "./src/db/db.js";

const PORT = config.PORT || 8080;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
