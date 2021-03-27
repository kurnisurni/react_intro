import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {


    return (
        <div>
            <h1>Adopt me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Meng" animal="Cat" breed="Persian" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));