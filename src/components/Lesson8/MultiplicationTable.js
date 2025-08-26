import "./MultiplicationTable.css";


export default function MultiplicationTable({ size = 10 }) {
    const rows = [[]];
    for (let j = 1; j <= size; j++) {
        rows[0].push(<td className="header-cell" key={j}>{j}</td>);
    }
    for (let i = 2; i <= size; i++) {
        const cells = [];
        cells.push(<td className="header-cell" key={1}>{i}</td>);
        for (let j = 2; j <= size; j++) {
        cells.push(<td key={j}>{i * j}</td>);
        }
        rows.push(<tr key={i}>{cells}</tr>);
    }

    return (
        <div className="table-wrapper">
        <h2>Multiplication Table {size} x {size}</h2>
        <table className="multiplication-table">
            <tbody>{rows}</tbody>
        </table>
        </div>
    );
}
