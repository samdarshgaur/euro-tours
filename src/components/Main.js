import Tours from "./Tours";

import './Main.css';

const Main = (props) => {
    return (
        <main className="container">
            <section className="tours-container">
                <div className="title">
                    <h1>Our Tours</h1>
                    <div className="underline"></div>
                </div>
                <Tours tours={props.tours} />
            </section>
        </main>
    )
};

export default Main;