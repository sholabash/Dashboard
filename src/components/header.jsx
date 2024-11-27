import React from 'react';


function Header() {
    const styles = {
        header: {
            backgroundColor:"Blue",
            color: "#fff",
            paddingTop: "15px",
            paddingLeft: "20px",
            display: "flex",
            height: "50px",
            justifyContent: "space-between",
            alignItems: "center"
        },
        title: {
            margin: 0,
            fontSize:"20px"
        },
        search:{
            padding: "5px 10px",
            border: "none",
            borderRadius: "4px"
        }
    }

    return(
        <header style={styles.header}>
            <h1 style={styles.title}>Dashboard</h1>
            <input style={styles.search} type='text'placeholder='Search' />



        </header>
    );
    
}

export default Header;