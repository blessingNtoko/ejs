import express from "express";
import ejs from "ejs";

const app = express();
const port = 4177;
let message = "";

function weekendOrWeekday(req, res, next) {
    const dayOfTheWeek = new Date().getDay();
    if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
        message = "Hey! It's the weekend, its time to have fun!"
    } else {
        message = "Hey! It's a weekday, its time to work hard!"
    }
    next();
}

app.use(weekendOrWeekday);

app.get("/", (req, res) => {
    res.render("index.ejs", {
        message
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});