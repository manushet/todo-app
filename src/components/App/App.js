
import { useState, useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppHeader from '../AppHeader/AppHeader';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
import './App.css';

const App = () => {
    const [todoItems, setTodoItems] = useState([
        { id: 0, label: 'Drink cofee', important: false, done: false },
        { id: 1, label: 'Build React App', important: true, done: false },
        { id: 2, label: 'Have a lunch', important: false, done: false }
    ]);
    const [maxId, setMaxId] = useState(3);
    const [activeFilter, setActiveFilter] = useState('all');
    const [search, setSearch] = useState(null);

    const onToggleItemProp = (id, prop) => {
        
        setTodoItems(todoItems.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })); 
    }   

    const onDeleteItem = (id) => {
        setTodoItems(todoItems.filter(item => item.id !== id));
    }  

    const onAddItem = (label) => {
        const item = {
            id: maxId, 
            label: label, 
            important: false, 
            done: false
        };
        setMaxId(maxId + 1);
        setTodoItems([...todoItems, item]);
    } 

    const onChangeFilter = (filter) => {
        setActiveFilter(filter);
    }

    const onApplyFilter = (items) => {
        switch (activeFilter) {
            case "active": 
                return items.filter(item => item.done === false);
            case "done": 
                return items.filter(item => item.done === true);
            default:
                return items;
        }
    }

    const onChangeSearch = (search) => {
        setSearch(search);
    }    

    const onApplySearch = (items) => {
        return search ? items.filter(item => item.label.toLowerCase().indexOf(search.toLowerCase()) > -1) : items;
    }

    const filteredItems = onApplySearch(onApplyFilter(todoItems));
       
    const doneCount = filteredItems.filter(item => item.done === true).length;
    const todoCount = filteredItems.length - doneCount;

    return (
        <div className="App container todo-app">
          <header className="App-header">
            <AppHeader toDo={todoCount} done={doneCount} />
          </header>
          <div className="top-panel d-flex">
            <SearchPanel onChangeSearch={onChangeSearch}/>
            <ItemStatusFilter activeFilter={activeFilter} onChangeFilter={onChangeFilter}/>
          </div>
          <TodoList 
            items={filteredItems} 
            onToggleItemProp={onToggleItemProp}
            onDeleteItem={onDeleteItem} />
          <ItemAddForm onAddItem={onAddItem}/>
        </div>
    );
}

export default App;
