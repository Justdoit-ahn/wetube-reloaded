import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handleOpen = () => console.log("DB에 접속하였습니다.");

db.on("error", (error) => console.log("DB 오류", error));
db.once("open", handleOpen);
