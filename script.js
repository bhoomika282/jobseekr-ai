const { app } = require("./backend/server");


app.usecors({
    origin: "https://your-frontend-name.vercel.app"
});
