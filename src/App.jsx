import { useState } from 'react';
import { Button, Box, Typography, Paper, Container } from '@mui/material';

const choices = ['stone', 'paper', 'scissor'];

function App() {
  const [message, setMessage] = useState('Click any button to test your luck!');

  const handleClick = (playerChoice) => {

    const machine = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === machine) {
      setMessage(`🤝 It's a draw! You both chose ${playerChoice}.`);
    } else if (
      (playerChoice === 'scissor' && machine === 'paper') ||
      (playerChoice === 'stone' && machine === 'scissor') ||
      (playerChoice === 'paper' && machine === 'stone')
    ) {
      setMessage(`🎉 You won! You: ${playerChoice}, Machine: ${machine}`);
    } else {
      setMessage(`😢 You lost! You: ${playerChoice}, Machine: ${machine}`);
    }
  };

  return (
    <div className='div'>
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: '100%',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          🪨📄✂️ Rock Paper Scissors
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            my: 3,
          }}
        >
          {choices.map((item) => (
            <Button
              key={item}
              variant="contained"
              size="large"
              onClick={() => handleClick(item)}
              color="primary"
              sx={{ minWidth: 120 }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Typography variant="h5" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </Paper>
    </Box>
    </div>
  );
}

export default App;
