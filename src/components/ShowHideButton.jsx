export function ShowHideButton({onToggle, showChart}){

    return(
        <div className="button">
            <button
                type="button"
                className="nes-btn is-success"
                onClick={onToggle}
            >
                {showChart ? ' Hide categories ' : ' Show categories'}
            </button>
        </div>

    );

}