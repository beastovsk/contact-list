import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
        <div className="App">
            <Navbar />
            <ContactList />
        </div>
    );
}

export default App;
