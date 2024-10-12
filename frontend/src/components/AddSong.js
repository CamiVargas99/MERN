import React, { useState } from 'react';
import axios from 'axios';

const AddSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSong = { title, artist, genre }; // Crear un objeto de canción
    await axios.post('http://localhost:5000/api/songs', newSong); // Enviar la nueva canción al backend
    setTitle(''); // Limpiar el campo de título
    setArtist(''); // Limpiar el campo de artista
    setGenre(''); // Limpiar el campo de género
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Canción</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artista"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Género"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <button type="submit">Agregar Canción</button>
    </form>
  );
};

export default AddSong;
