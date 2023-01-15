import React, { useState, useEffect } from "react";

const routines = ({ user }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fitnesstrac-kr.herokuapp.com/docs/api/routines');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <header>
                <h1>Welcome {user?.username} to Fitness Tracker!</h1>
                <div>
                    <Link to="/App">
                        Home<br></br>
                    </Link>
                    Already a member?{" "}
                    <Link to="/LogIn">
                        Sign In<br></br>
                    </Link>
                    New user?{" "}
                    <Link to="/Register">
                        Sign Up<br></br>
                    </Link>
                    Routines{" "}
                    <Link to="/Routines">
                        See All Routines<br></br>
                    </Link>
                    Activities <Link to="/Activites">See All Activities</Link>
                </div>
            </header>
            <div>
                {data.map((routine) => (
                    <div key={routine.id}>
                        <h2>{routine.name}</h2>
                        <p>{routine.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default routines;