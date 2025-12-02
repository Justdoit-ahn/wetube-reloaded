import "./db";
import "./models/Video";
import app from "./server";

const port = 4000;

const portClick = () =>
  console.log(`Server listenting on port http://localhost:${port}`);

app.listen(port, portClick);
