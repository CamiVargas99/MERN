import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await axios.get('http://localhost:5000/api/songs'); // Obtener canciones
      setSongs(res.data); 
    };
    fetchSongs();
  }, []);

  return (
    <div>
      <h2>Lista de Canciones</h2>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>
            {song.title} - {song.artist} ({song.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
