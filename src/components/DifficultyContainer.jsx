import {DifficultyChart} from './DifficultyChart.jsx'


export function DifficultyContainer ({difficultyStats}) {
    return (
        <div className="nes-container is-dark with-title stats-container"
             style={{backgroundColor: 'transparent'}}>
            <p className="title" style={{backgroundColor: '#041d39'}}> Difficulty distribution</p>
            <DifficultyChart
                difficultyStats={difficultyStats} />
        </div>
    )
}