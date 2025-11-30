import React, { useState } from "react";
import "../styles/App.css";

function App() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState("");

    const calculateFLAMES = () => {

        if (name1.trim() === "" || name2.trim() === "") {
            setResult("Please Enter valid input");
            return;
        }

        let arr1 = name1.split("");
        let arr2 = name2.split("");

        
        for (let i = 0; i < arr1.length; i++) {
            const char = arr1[i];
            const indexInArr2 = arr2.indexOf(char);

            if (indexInArr2 !== -1) {
                arr1[i] = "";         
                arr2[indexInArr2] = "";  
            }
        }

       
        const count = arr1.join("").length + arr2.join("").length;

        
        const mod = count % 6;

        const map = [
            "Siblings",
            "Friends",
            "Lovers",
            "Affection",
            "Marriage",
            "Enemies"
        ];

        setResult(map[mod]);
    };

    const clearAll = () => {
        setName1("");
        setName2("");
        setResult("");
    };

    return (
        <div id="main">
            <form>
                <input
                    data-testid="input1"
                    name="name1"
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder="Enter Name 1"
                />

                <input
                    data-testid="input2"
                    name="name2"
                    type="text"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder="Enter Name 2"
                />

                <button
                    data-testid="calculate_relationship"
                    name="calculate_relationship"
                    type="button"
                    onClick={calculateFLAMES}
                >
                    Calculate Relationship Future
                </button>

                <button
                    data-testid="clear"
                    name="clear"
                    type="button"
                    onClick={clearAll}
                >
                    Clear
                </button>
            </form>

            <h3 data-testid="answer">{result}</h3>
        </div>
    );
}

export default App;
