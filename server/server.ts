import { app } from "./app";
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});
