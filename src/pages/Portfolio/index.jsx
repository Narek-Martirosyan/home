import Card from "../../components/Card";
import tictactoe from './img/tictactoe.png';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio page</h1>
            <Card
                img={tictactoe}
                title={'Tic Tac Toe'}
                text={'The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner'}
                url={'/portfolio/tictactoe'}
            />
        </div>
    )
}