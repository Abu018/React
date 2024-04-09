export default function List({ onSelect }) {
  return (
    <div>
      {result !== null && (
        <div className="center">
          <h2>Result:</h2>
          <table className="center">
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
  );
}
