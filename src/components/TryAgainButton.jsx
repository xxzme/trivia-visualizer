
export function TryAgainButton ({reloadData}) {
    return (
        <div className="button">
            <button
                type="button"
                className="nes-btn is-warning reload-btn"
                onClick={reloadData}
            >
                Try again
            </button>
        </div>
    );
}