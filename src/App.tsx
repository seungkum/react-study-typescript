import React from "react";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <div>
            <Header></Header>
            <hr />
            <div className='container'>
                <Nav></Nav>
                <hr />
                <section className='contents'>
                    <div>
                        <h3>Users</h3>
                        <p>Contents</p>
                    </div>
                </section>
                <hr />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
