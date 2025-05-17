import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card';

function ChoreList() {

    const [dailyChores, setDailyChores] = useState([
        { name: "Walk the Dogs" },
        { name: "Sweep the Kitchen" },
        { name: "Take out the Trash" },
        { name: "Wipe down Countertops" }
    ]);

    const [weelyChores, setWeeklyChores] = useState([
        { name: "Walk the Dogs" },
        { name: "Sweep the Kitchen" },
        { name: "Take out the Trash" },
        { name: "Wipe down Countertops" }
    ]);

    function randomizeChores() {

    };

    return (
        <div>
            <Container>
                <Card>
                    <Card.Title>Chore List</Card.Title>
                    <Card.Body>
                        <ul>
                            {dailyChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Chore List 2</Card.Title>
                    <Card.Body>
                        <ul>
                            {dailyChores.map((chore) => (
                                <li key={chore.id}>{chore.name}</li>
                            ))}                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default ChoreList;