import express from "express";
import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

const app = express();

app.use(express.json());

const port = 7000;

app.get("/", (req, res)=>{
    res.send(
            {nama : "Yusron Fauzan"}
        );
});

app.get("/planet", async (req, res) => {
    try {
        const planet = await database.planet.findMany();
        res.send(planet);
        // if(!planet)
    } catch (error) {
        res.send({status: 404, message: "Planet Tidak Ada"})
    }
});

app.get("/planet/:id", async(req, res) => {
    try {
     const planet = await database.planet.findUnique({
         where: {
             id: parseInt(req.params.id),
         },
     });
     if (!planet) throw new Error("Planet Tidak Ada");
     res.send(planet);
    } catch (error) {
     res.send({message: "Planet Tidak DiTemukan", err: error.message});
    }
 });

app.post("/planet/create", async (req, res) => {
    try {
        const planet = await database.planet.create({
            data:{
                nama_planet: req.body.nama_planet,
                diameter: req.body.diameter,
                gravitasi: req.body.gravitasi,
                keterangan: req.body.keterangan
            },
        });
        res.send({message: "Mahasiswa Berhasil Di Ciptakan!", data: planet});
    } catch (error) {}
});
app.put("/planet/update", async (req, res) => {
    try {
      const planet= await database.planet.update({
        where: {
          id: req.body.id,
        },
        data: {
          nama_planet: req.body.nama_planet,
          diameter: req.body.diameter,
          gravitasi: req.body.gravitasi,
          keterangan: req.body.keterangan,
        },
      });
      res.send({ message: "Planet Berhasil Diubah", data: planet });
    } catch (err) {}
  });

app.delete("/planet/delete",async (req,res) => {
    await database.planet.delete({
        where:{
            id: req.body.id,
        }
    });
    res.send({message: "Planet Berhasil Di Hapus"});
});

app.listen(port, () => {
    console.log(`Aplikasinya berjalan pada port ${port}`);
});