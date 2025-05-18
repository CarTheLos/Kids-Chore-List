import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';

function ChoreList() {

    const [dailyChores] = useState([
        { name: "Walk the Dogs" },
        { name: "Sweep the Kitchen" },
        { name: "Take out the Trash" },
        { name: "Wipe down Countertops" }
    ]);

    const [weeklyChores] = useState([
        { name: "Swiffer mop the Kitchen" },
        { name: "Clean the toilet" },
        { name: "Vaccuum the Living Room" },
        { name: "Wipe down the Living Room Table" }
    ]);

    const [joeChores, setJoeChores] = useState([])
    const [middyChores, setMiddyChores] = useState([])

    function getRandomItems(arr, count) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function randomizeChores() {
        const randomDaily = getRandomItems(dailyChores, 2);
        const randomWeekly = getRandomItems(dailyChores, 2);

        setJoeChores([...randomDaily, ...randomWeekly])
        setMiddyChores([...randomDaily, ...randomWeekly])

    };

    return (
        <div>
            <Container>
                <Card>
                    <Card.Title>Daily Chores</Card.Title>
                    <Card.Body>
                        <ul style={{listStyle: 'none'}}>
                            {dailyChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Weekly Chores</Card.Title>
                    <Card.Body>
                        <ul style={{listStyle: 'none'}}>
                            {weeklyChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Middy's Chores</Card.Title>
                    <Card.Body>
                        <ul style={{listStyle: 'none'}}>
                            {middyChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}                        </ul>
                    </Card.Body>
                </Card>                <Card>
                    <Card.Title>Joe's Chores</Card.Title>
                    <Card.Body>
                        <ul style={{listStyle: 'none'}}>
                            {joeChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}                        </ul>
                    </Card.Body>
                </Card>
                <Button variant="contained" color="primary" onClick={randomizeChores}>Randomize Chores</Button>
            </Container>
        </div>
    )
}

export default ChoreList;