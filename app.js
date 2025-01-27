import express from 'express'
const app = express();
const port = 5000;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
