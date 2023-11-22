const express = require('express')
const fs = require('fs').promises
const cors = require('cors');

const app = express();
const port = 7000;

app.use(express.json());
app.use(cors());

app.get('/api/data', async (reg, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: "Não foi possível carregar os dados" });
    }
})

// Startar o server

app.listen(port, () => {
    console.log(`A API está sendo executada na porta http://localhost:${port}`);
}); 

app.post("/api/save", async (req, res) => {
    try {
      const novosDados = req.body; //é onde recebemos o corpo do dado
      await fs.writeFile(
        "data.json",
        JSON.stringify(novosDados, null, 2),
        "utf8"
      );
      res.json({ message: "Dados salvos com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Não foi possível salvar os dados." });
    }
  });

  



