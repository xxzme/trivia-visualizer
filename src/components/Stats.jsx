export function Stats({questions, categories}){
    return(
            <div className="stats-info">
                <p className="stat-text">
                    Questions in total: <span className="nes-text is-primary">{questions.length}</span>
                </p>
                <p className="stat-text">
                    Categories: <span className="nes-text is-primary">{categories.length}</span>
                </p>
            </div>
    );
}