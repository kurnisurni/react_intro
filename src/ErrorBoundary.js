// mostly code from https://reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, Redirect, navigate } from "@reach/router";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, redirect:false };
      }
    static getDerivedStateFromError () {
        return {hasError:true};
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => navigate('/'), 5000);
        }
    }

    render() {
        if (this.setState.redirect) {
            return <Redirect to="/" />; 
        }

        if(this.state.hasError) {
            return (
                <h1>There was an error with this listing. 
                    <Link to="/">Click here</Link>
                    {" "}
                    to go back to the home page or wait 5 seconds.
                </h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 