import './TodoListItem.css';

const TodoListItem = ({ id, done, label, important, onToggleItemProp, onDeleteItem }) => {

	let classes = 'todo-list-item';
	classes += done ? ' done' : '';
	classes += important ? ' important' : '';

	let  btnImportantClasses = 'btn btn-outline-success btn-sm float-right';
	btnImportantClasses += important ? ' active' : '';

	return (
		<span className={classes}>
			<span
				className='todo-list-item-label' 
				onClick={() => onToggleItemProp(id, 'done')}>
				{label}
			</span>

			<button type="button"
				className={btnImportantClasses}
				onClick={() => onToggleItemProp(id, 'important')}>
				<i className="fa fa-exclamation" />
			</button>

			<button type="button"
				className="btn btn-outline-danger btn-sm float-right"
				onClick={() => onDeleteItem(id)} >
				<i className='far fa-trash-alt'></i>
			</button>
		</span>
	);
}

export default TodoListItem;