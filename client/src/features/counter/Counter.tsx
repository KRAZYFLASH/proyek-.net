import { useStore } from '../../lib/hooks/useStore'
import { observer } from 'mobx-react-lite';
import { Box, Button, ButtonGroup, List, ListItem, Paper, Typography } from '@mui/material';

const Counter = observer(function Counter() {
    const { counterStore } = useStore();
    return (
        <Box display='flex' justifyContent='space-between'>
            <Box sx={{ width: '60%' }}>
                <Typography variant="h4" gutterBottom>Counter: {counterStore.count}</Typography>
                <Typography variant='h6'> The Count is: {counterStore.count % 2 === 0 ? ' Even' : ' Odd'}</Typography>

                <ButtonGroup sx={{ mt: 2 }}>
                    <Button onClick={() => counterStore.decrement()} variant="contained" color='error'>Decrement</Button>
                    <Button onClick={() => counterStore.increment()} variant="contained" color='success'>Increment</Button>
                    <Button onClick={() => counterStore.increment(5)} variant="contained" color='primary'>Increment by 5</Button>
                </ButtonGroup>
            </Box>
            <Paper sx={{width: '40%', p: 4}}>
                <Typography variant="h5">Event Log (Total: {counterStore.eventCount})</Typography>
                <List>
                    {counterStore.events.map((event, index) => (
                        <ListItem key={index} sx={{ py: 0, fontSize: '0.9rem' }}>- {event}</ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    )
})

export default Counter;