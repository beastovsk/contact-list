import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import NavButton from "./components/Navbar/NavButton/NavButton";
import NavModal from "./components/Navbar/NavButton/NavModal/NavModal";

function App() {
    const [modalActive, setModalActive] = useState(false);
    
    return (
        <div className="App">
            <NavModal active={modalActive} setActive={setModalActive} />
            <div className="Navbar">
                <h3>Contact List</h3>
                <NavButton openModalWindow={setModalActive} />
            </div>
            <ContactList />
        </div>
    );
}

export default App;
