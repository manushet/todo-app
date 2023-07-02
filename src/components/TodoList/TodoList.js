import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ items, onToggleItemProp, onDeleteItem, onAddItem }) => {
	const listItems = items.map(item => {
		const { id } = item;

		return (
			<li className='list-group-item' key={id}>
				<TodoListItem {...item} 
					onToggleItemProp={onToggleItemProp} 
					onDeleteItem={onDeleteItem}
					onAddItem={onAddItem} />
			</li>
		)
	}
	);
	return (
		<ul className='list-group todo-list'>
			{listItems}
		</ul>
	)
}

export default TodoList;