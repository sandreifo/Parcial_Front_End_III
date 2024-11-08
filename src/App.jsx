import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Card from './Components/Card';

function App() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(false);

  const handleFormSubmit = (data) => {
    const isFrutaValida = data.frutaFavorita.trim().length >= 3 && !data.frutaFavorita.startsWith(" ");
    const isColorValido = data.colorFavorito.length >= 6;

    if (isFrutaValida && isColorValido) {
      setEntries([...entries, data]);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} error={error} />
      {entries.length > 0 && (
        <div className="card-container">
          {entries.map((entry, index) => (
            <Card key={index} preferencias={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
