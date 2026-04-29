import express from "express";

const app = express();

const port = 8000;
const hostName = "http://localhost";

app.use(express.json());

const daftarFIlm = [];

app.get('/film', (req, res) => {
    console.log("GET dipanggil, isi:", daftarFIlm);
    return res.json(daftarFIlm);
});

app.get('/film/:id', (req, res) => {
    const film = daftarFIlm.find(m => m.id === parseInt(req.params.id));

    if(!film){
        return res.status(404);
    }

    return res.status(200).json(film);
})

app.post('/film', (req, res) => {
    const film = {
        id: daftarFIlm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };

    daftarFIlm.push(film);
    return res.status(201).json(film);
});

app.delete('/film/:id', (req, res) => {
    const indexFIlm = daftarFIlm.findIndex(f => f.id === Number(req.params.id));

    if(indexFIlm === -1){
        return res.status(404).json({ message: "Film tidak ditemukan" });
    }

    const filmDihapus = daftarFIlm.splice(indexFIlm, 1);

    return res.json(filmDihapus);
});

app.listen(port, "localhost", () => 
    console.log(`Peladen berjalan di ${hostName}:${port}`)
);