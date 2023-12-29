import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleButtonClick = async () => {
        try {
            setMessage("Hello " + name + "!");
        } catch (error) {
            setMessage('Attempt to greet failed.');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <input
                    style={ { margin: "20px" }}
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleButtonClick}>Greet</button>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    {message}
                </div>
            </header>
        </div>
    );
}

export default App;
