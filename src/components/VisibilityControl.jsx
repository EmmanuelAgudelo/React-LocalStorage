export const VisibilityControl = ({setShowCompleted, cleanTask, isChecked}) => {

    function handleDelete() {
        if (window.confirm('¿Estás seguro que deseas eliminar esto?')){
            cleanTask();
        }
    }

    return(
      <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
          <div className="form-check form-switch">
              <input className="form-check-input" checked={isChecked} type="checkbox" onChange={event => setShowCompleted(event.target.checked)}/><label>Show task
              done</label>
          </div>
          <button onClick={handleDelete} className="btn btn-danger btn-sm">
              Clear
          </button>
      </div>
  );
}