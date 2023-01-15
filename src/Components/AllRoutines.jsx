import React, { useState } from "react";
import { Button } from "./Button";
import { Router, Route } from 'react-router-dom';


export const AllRoutines = ({ routines }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className='routines'>
            <form>
                <label htmlFor="name">routine Name:</label>
                <input
                    value={name}
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <label htmlFor="description">Description:</label>
                <input
                    value={description}
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                ></input>
            </form>
            <Button
                action={async () => {
                    const token = localStorage.getItem("token")
                    const newRoutine = await createNewRoutine(name, description, token);
                    setRoutines([newRoutine, ...routines]);
                }}
                content={'Create New routine'}
            />

            {routines ? routines.map(routine => {
                return (
                    <div key={routine.id} className='routine'>
                        <h3>routine: {routine.name}</h3>
                        <p>Description: <br></br>{activity.description}</p>
                    </div>
                )
            }
            ) : (
                <h2>No routines Found</h2>
            )}
        </div>
    );
};


const Routes = () => {
    return (
        <Router>
            <Route exact path='/routines' component={AllRoutines} />
        </Router>
    )
}

export default Routes;