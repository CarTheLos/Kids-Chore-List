import React, { useState, useEffect } from 'react';
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

    const [joeChores, setJoeChores] = useState([]);
    const [middyChores, setMiddyChores] = useState([]);

    //load the chore lists from local storage when the app mounts
    useEffect(() => {
        const storedJoe = localStorage.getItem('joeChores');
        const storedMiddy = localStorage.getItem('middyChores');
        if (storedJoe) setJoeChores(JSON.parse(storedJoe));
        if (storedMiddy) setMiddyChores(JSON.parse(storedMiddy));
    }, []);

    function getRandomItems(arr, count) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function randomizeChores() {
        //randomize then split the daily chores
        const shuffledDaily = getRandomItems(dailyChores, 4);
        const joeDaily = shuffledDaily.slice(0, 2);
        const middyDaily = shuffledDaily.slice(2, 4);

        //randomize then split the weekly chores
        const shuffledWeekly = getRandomItems(weeklyChores, 4);
        const joeWeekly = shuffledWeekly.slice(0, 2);
        const middyWeekly = shuffledWeekly.slice(2, 4);

        //add the daily and weekly chores to the kids' lists
        const joe = [...joeDaily, ...joeWeekly];
        const middy = [...middyDaily, ...middyWeekly];

        setJoeChores(joe);
        setMiddyChores(middy);

        //save the chore lists to the local storage
        localStorage.setItem('joeChores', JSON.stringify(joe));
        localStorage.setItem('middyChores', JSON.stringify(middy));
    }


    return (
        <div className="chore-list">
            <Container>
                <div className='card-grid'>
                    <Card>
                        <Card.Title style={{ fontWeight: 'bold', color: 'blue' }}>Daily Chores</Card.Title>
                        <Card.Body>
                            <ul style={{ listStyle: 'none', color: 'blue' }}>
                                {dailyChores.map((chore) => (
                                    <li key={chore.name}>{chore.name}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Title style={{ fontWeight: 'bold', color: 'red' }}>Weekly Chores</Card.Title>
                        <Card.Body>
                            <ul style={{ listStyle: 'none', color: 'red' }}>
                                {weeklyChores.map((chore) => (
                                    <li key={chore.name}>{chore.name}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Title style={{ fontWeight: 'bold' }}>Middy's Chores</Card.Title>
                        <Card.Body>
                            <ul style={{ listStyle: 'none' }}>
                                {middyChores.map((chore, index) => (
                                    <li key={chore.name}
                                    style={{ color: index < 2? 'blue' : 'red'}}>
                                        {chore.name}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Title style={{ fontWeight: 'bold' }}>Joe's Chores</Card.Title>
                        <Card.Body>
                            <ul style={{ listStyle: 'none' }}>
                                {joeChores.map((chore, index) => (
                                    <li
                                        key={chore.name}
                                        style={{ color: index < 2 ? 'blue' : 'red' }}>
                                        {chore.name}
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
                <Button variant="contained" color="primary" onClick={randomizeChores}>
                    Randomize Chores
                </Button>
            </Container>
        </div>
    );
}

export default ChoreList;
