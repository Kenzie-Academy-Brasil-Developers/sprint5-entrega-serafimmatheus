import app from "./app";
import { AppDataSource } from "./data-source";

const PORT = 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected.");

    app.listen(PORT, () => {
      console.log(`App running!\nhttp://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
