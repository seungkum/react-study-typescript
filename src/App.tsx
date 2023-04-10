import React from "react";

function App() {
    return (
        <div>
            <header>
                <h1>React study</h1>
            </header>
            <hr />
            <div className='container'>
                <nav className='nav'>
                    <ul>
                        <li>
                            <h2>Users</h2>
                        </li>
                        <li>
                            <h2>Search</h2>
                        </li>
                    </ul>
                </nav>
                <hr />
                <section className='contents'>
                    <div>
                        <h3>Users</h3>
                        <p>Contents</p>
                    </div>
                </section>
                <hr />
            </div>
            <footer>Copyright</footer>
        </div>
    );
}

export default App;
