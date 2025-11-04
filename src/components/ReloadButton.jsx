export function ReloadButton({onReload}){
    return(
        <button
            type="button"
            className="nes-btn is-warning reload-btn"
            onClick={onReload}
        >
            Reload data
        </button>
    );
}