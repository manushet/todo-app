import './ItemStatusFilter.css';

const ItemStatusFilter = ({activeFilter, onChangeFilter}) => {
	
	const buttons = [
		{name: 'all', label: 'All', classes: 'btn btn-outline-secondary'},
		{name: 'active', label: 'Active', classes: 'btn btn-outline-secondary'},
		{name: 'done', label: 'Done', classes: 'btn btn-outline-secondary'},
	];

	const buttons_group = buttons.map(({name, label, classes}) => {
		if (name === activeFilter) {
			classes = 'btn btn-info';
		}
		return (
			<button 
				type="button"
				className={classes} 
				key={name}				
				onClick={() => onChangeFilter(name)}>
					{label}
			</button>			
		)
	});
	
	return (
		<div className="btn-group">
			{buttons_group}
		</div>
	);
};

export default ItemStatusFilter;