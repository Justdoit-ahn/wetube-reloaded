import "./db";
import "./models/Video";
import app from "./server";

const port = 4000;

const portClick = () =>
  console.log(`현재 동작하고 있는 포트 : http://localhost:${port}`);

app.listen(port, portClick);
