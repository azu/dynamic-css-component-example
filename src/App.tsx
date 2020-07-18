import React, { useState } from "react";
import "./App.css";
import { Title } from "./component/Title";
import { Main } from "./component/Main";
import { Nav } from "./component/Nav";
import { Sidebar } from "./component/Sidebar";
import { Footer } from "./component/Footer";

function App() {
    const [mode, setMode] = useState<"light" | "dark">("light");
    return (
        <div className={"App " + (mode === "light" ? "theme-light" : "theme-dark")}>
            <Title className={"App-Title"}>タイトル</Title>
            <Main
                className={"App-Main"}
                style={{
                    "--border": mode === "dark" ? "4px solid green" : "none"
                }}
            >
                メイン
                <button
                    onClick={() => {
                        setMode(mode === "light" ? "dark" : "light");
                    }}
                >
                    Switch Theme: {mode === "light" ? "dark" : "light"}
                </button>
            </Main>
            <Nav className={"App-Nav"}>ナビ </Nav>
            <Sidebar className={"App-Sidebar"}>サイド</Sidebar>
            <Footer className={"App-Footer"}>フッター</Footer>
            <Sidebar className={"App-Ad"}>広告</Sidebar>
        </div>
    );
}

export default App;
