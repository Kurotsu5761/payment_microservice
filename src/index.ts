import app from "./app";

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Payment microservice listening at port: ${PORT}`);
});
