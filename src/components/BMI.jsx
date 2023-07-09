import React from "react";
import "./BMI.css";
import backgroundImage from "../images/bmi.jpg"

const BMI = () => {
    const style ={
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
    };
    const calculate_bmi = (event) => {
        event.preventDefault();
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const bmi = (weight / (height / 100) ** 2).toFixed(2);

        if (bmi < 18.5){
              alert('Your BMI index is less than 18.5 so you are underweight.');
        }else if (bmi > 18.5 && bmi <24.9){
            alert('Your BMI index is less than 24.9  and greater than 18.5 so you have normal weight.');
        }else if (bmi > 25 && bmi < 29.9){
            alert('Your BMI index is less than 29.9  and greater than 25 so you have overweight.');
        }else {
            alert('Your BMI index is greater thn 30 so you have got obesity.')
        }
    };
    return (
        <div className="bmi_container" style={style}>
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
                <button type="submit" className="btn btn-danger bmi_btn">
                    <p className="btn_text">Calculate</p>
                </button>
            </form>
            </div>
        </div>
    );
};

export default BMI;
