import React, { useState } from "react";
import "./index.css";
import image from "./assets/investment-calculator-logo.png";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit() {
    const P = parseFloat(initialInvestment);
    const annualIncomeValue = parseFloat(annualIncome);
    const r = parseFloat(expectedReturn) / 100;
    const n = 12;
    const t = parseInt(duration);

    let data = [];

    for (let year = 1; year <= t; year++) {
      const interest = P * r * year;
      const investedCapital = P + annualIncomeValue * year + interest;
      const investmentValue = P * Math.pow(1 + r / n, n * year);

      data.push({
        month: year,
        investedCapital: investedCapital.toFixed(2),
        yearlyInterest: annualIncomeValue.toFixed(2),
        totalInterest: interest.toFixed(2),
        investmentValue: investmentValue.toFixed(2),
      });
    }

    setResult(data);
  }

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(event.target.value);
  }

  function handleAnnualIncomeChange(event) {
    setAnnualIncome(event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  return (
    <div>
      <header id="header" className="center">
        <h1>Investment Calculator</h1>
        <img src={image} alt="investment-cal" />
      </header>
      <div className="center">
        <div id="user-input">
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={handleInitialInvestmentChange}
          />
        </div>
        <div id="user-input">
          <label>Annual Income</label>
          <input
            type="number"
            required
            value={annualIncome}
            onChange={handleAnnualIncomeChange}
          />
        </div>
        <div id="user-input">
          <label>Expected Return (%)</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={handleExpectedReturnChange}
          />
        </div>
        <div id="user-input">
          <label>Duration (Years)</label>
          <input
            type="number"
            required
            value={duration}
            onChange={handleDurationChange}
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="center" id="result">
        {result !== null && (
          <div className="center">
            <h2>Result:</h2>
            <table className="center" id="input-update">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Invested Capital</th>
                  <th>Yearly Interest</th>
                  <th>Total Interest</th>
                  <th>Investment Value</th>
                </tr>
              </thead>
              <tbody>
                {result.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>${row.investedCapital}</td>
                    <td>${row.yearlyInterest}</td>
                    <td>${row.totalInterest}</td>
                    <td>${row.investmentValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
