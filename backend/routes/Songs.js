// routes/songs.js
import express from 'express';
import Song from '../models/Song.js'; 

const router = express.Router();

// Obtener todas las canciones
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Agregar una nueva canción
router.post('/', async (req, res) => {
    const { title, artist, genre } = req.body;
    const newSong = new Song({ title, artist, genre });

    try {
        const savedSong = await newSong.save();
        res.status(201).json(savedSong);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;  
