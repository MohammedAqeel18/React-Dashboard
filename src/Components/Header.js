import React from "react";

function Header({title}){
    return(
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <h1 className="text-3xl font-bold text-center">{title} </h1>
        </header>
    )
}

export default Header;