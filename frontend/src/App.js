import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSong = { title, artist, genre };

    try {
      const response = await axios.post('http://localhost:5000/api/songs', newSong);
      setSongs([...songs, response.data]); // Agregar la nueva canción a la lista
      setTitle('');
      setArtist('');
      setGenre('');
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#">Songs</a>
        <a href="#">Playlists</a>
        <a href="#">Add Song</a>
        <a href="#">Add Playlist</a>
      </nav>

      <div className="container">
        <h1 className="title-large">Lista de Canciones</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Artista"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Género"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
          <button className="btn-submit" type="submit">Agregar Canción</button>
        </form>

        <ul className="song-list">
          {songs.map((song) => (
            <li key={song._id} className="song-item">{song.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
