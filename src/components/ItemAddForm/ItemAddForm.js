import './ItemAddForm.css';

const ItemAddForm = ({onAddItem}) => {
    function setLabel(e) {
        e.preventDefault();
        const label = document.getElementById("new-task-label");
        console.log(label, label.value);
        onAddItem(label.value);
        label.value = "";
    }
    
    return (
        <form className="item-add-form">
            <input 
                type="text" 
                className="form-control"
                placeholder="Type new task"
                id="new-task-label"
            />    
            <button
                className="btn btn-outline-secondary add-item-btn"
                onClick={setLabel}>
                Add Item
            </button>
        </form>
    )
}

export default ItemAddForm;