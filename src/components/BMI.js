import React from "react";
import "./BMI.css";

const BMI = () => {
    const calculate_bmi = (event) => {
        event.preventDefault();
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const bmi = weight / (height / 100) ** 2;
        alert(bmi.toFixed(2));
    };
    return (
        <div className="bmi_container">
            <div className="text_overlay">
            <form id="bmiform" onSubmit={calculate_bmi} >
                <h1 className="heading">
                    <u>BMI Calculator:</u>
                </h1>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        id="height"
                        placeholder="Enter height (cm)"
                        name="height"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        id="weight"
                        placeholder="Enter weight (kg)"
                        name="weight"
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Calculate
                </button>
            </form>
            </div>
            {/* <div className="index">
                <ul className="index_items">
                    <li className="index_item">Underweight: BMI less than 18.5</li>
                    <li className="index_item">Normal weight: BMI between 18.5 and 24.9</li>
                    <li className="index_item">Overweight: BMI between 25 and 29.9</li>
                    <li className="index_item">Obesity (Class 1): BMI between 30 and 34.9</li>
                    <li className="index_item">Obesity (Class 2): BMI between 35 and 39.9</li>
                    <li className="index_item">Obesity (Class 3): BMI 40 or higher (also known as morbid obesity)</li>
                </ul>
            </div> */}
        </div>
    );
};

export default BMI;
