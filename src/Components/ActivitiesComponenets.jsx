import React from "react";
const APIURL = `https://fitnesstrac-kr.herokuapp.com/docs/api/activities`;
import Activities from "./api/Activities";

const Activities = ({ user }) => {
    return (
        <header>
            <h1>Welcome {user?.username} to Fitness Tracker!</h1>
            <h2>TEST</h2>
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
    );
};

export default Activities;