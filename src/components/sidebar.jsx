import React from 'react';


function Sidebar() {
    const styles = {
        sidebar: {
            width: "200px",
            backgroundColor: "#333",
            color: "#fff",
            height: "500px",
            padding: "20px",
            boxSizing: "border-box"
        },
        menuItem: {
            margin: "15px 0",
            textDecoration: "none",
            color: "#fff",
            display: "block"
        }
    }
    return(
        <aside style={styles.sidebar}>
            <nav>
                <a href="#" style={styles.menuItem}>
                    Overview
                </a>
                <a href="#" style={styles.menuItem}>
                    Analytics
                </a>
                <a href="#" style={styles.menuItem}>
                    Report
                </a>
                <a href="#" style={styles.menuItem}>
                    Settings
                </a>
            </nav>
        </aside>
    );
    
}

export default Sidebar