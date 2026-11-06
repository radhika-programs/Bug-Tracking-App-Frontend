import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import ErrorPage from './components/error/ErrorPage';
import MenuManager from './components/menu/MenuManager';
import ApplicationMenu from './components/menu/application-menu/ApplicationMenu';
import ViewAllApplicationDetails from './components/menu/application-menu/ViewAllApplicationDetails';
import CreateApplication from './components/menu/application-menu/CreateApplication';
import UpdateApplication from './components/menu/application-menu/UpdateApplication';
import DeleteApplication from './components/menu/application-menu/DeleteApplication';
import ViewApplicationById from './components/menu/application-menu/ViewApplicationById';
import ViewApplicationByName from './components/menu/application-menu/ViewApplicationByName';
import Dummydata from './components/menu/application-menu/Dummydata';

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    /*const handleLogin = (username) => {
        setLoggedInUser(username);
    };*/

    function handleLogin(username) {
    setLoggedInUser(username);
    }

    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="/menu-manager" element={loggedInUser ? <MenuManager /> : <ErrorPage />} />
                    <Route path="/application-management" element={<ApplicationMenu />} />
                    <Route path="/applications-view-all" element={<ViewAllApplicationDetails />} />
                    <Route path="/applications-create" element={<CreateApplication />} />
                    <Route path="/applications-update" element={<UpdateApplication />} />
                    <Route path="/applications-delete" element={<DeleteApplication />} />
                    <Route path="/applications-view-by-id" element={<ViewApplicationById />} />
                    <Route path="/applications-view-by-name" element={<ViewApplicationByName />} />
                     <Route path="/Dummydata" element={<Dummydata />} />


                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
