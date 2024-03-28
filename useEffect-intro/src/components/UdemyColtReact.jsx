

export default function UdemyColtReact({ alt1, alt2, alt3 }) {
    const winner = alt1 === alt2 && alt1 === alt3;
    return (
        <div>
            <h1>{alt1}{alt2}{alt3}</h1>
            <h3 style={{ color: winner ? "green" : "red" }}>{winner ? "You win" : "You lose"}</h3>
            {winner && <h4>Grattis</h4>}
        </div>
    );
}
