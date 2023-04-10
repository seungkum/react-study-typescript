import React from "react";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import Search from "./pages/Search";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <hr />
                <div className='container'>
                    <Nav></Nav>
                    <hr />
                    <section className='contents'>
                        <Routes>
                            <Route path='/users' element={<Users />} />
                            <Route path='/search' element={<Search />} />
                            <Route path='*' element={<Navigate replace to='/users' />} />
                        </Routes>
                    </section>
                    <hr />
                </div>
                <Footer></Footer>
            </BrowserRouter>
        </div>
        // command shift 5 : 스샷
        // cmd d 같은 문자열 선택
    );
}

export default App;
