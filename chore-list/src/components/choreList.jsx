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

    const [weeklyChores, setWeeklyChores] = useState([
        { name: "Swiffer mop the Kitchen" },
        { name: "Clean the toilet" },
        { name: "Vaccuum the Living Room" },
        { name: "Wipe down the Living Room Table" }
    ]);

    const [joeChores, setJoeChores] = useState([])
    const [middyChores, setMiddyChores] = useState([])


    function randomizeChores() {

    };

    return (
        <div>
            <Container>
                <Card>
                    <Card.Title>Daily Chores</Card.Title>
                    <Card.Body>
                        <ul>
                            {dailyChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Weekly Chores</Card.Title>
                    <Card.Body>
                        <ul>
                            {weeklyChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Middy's Chores</Card.Title>
                    <Card.Body>
                        <ul>
                            {middyChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Joe's Chores</Card.Title>
                    <Card.Body>
                        <ul>
                            {joeChores.map((chore) => (
                                <li key={chore.name}>{chore.name}</li>
                            ))}                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default ChoreList;