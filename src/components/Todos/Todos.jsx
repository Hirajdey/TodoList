
import { useEffect, useState } from 'react';
import AppButton from '../AppButton/AppButton';
import AppInput from '../AppInput/AppInput';
import TodoList from '../TodoList/TodoList';

// Styles
import Styles from './Todos.module.scss';

const Todos = () => {
const [userInput, setUserInput] = useState(''); 
const [todoListCount, setTodoListCount] = useState();
const [todo, setTodo] = useState([]);

const hendleOnChangeTodoInputs = (event) => {
    const { value } = event.target; 
    setUserInput(value);
}

const onClickHendleAddTodo = () => { 
    setTodo([...todo, ...[userInput]]);
}

const onClickHendleEdit = () => {

}

const onClickHendleDelete = (index) => { 
    todo.splice(index, 1); 
    setTodo([...todo]);
}

useEffect(() => {
    setTodoListCount(todo.length);
},[todo])




 return (
     <div className={Styles.main}>
         <div className={Styles.header}> 
            <h2>Todos {todoListCount ? `(${todoListCount})` :""}</h2>
         </div>
         <div className={Styles.body}>
            <div className={Styles.userInputs}>
                <div className={Styles.colInput}>
                    <AppInput type="text" value={userInput} placeHolder="Enter todo here" onChange={(e) => hendleOnChangeTodoInputs(e)}/>
                </div>
                <div className={Styles.colBtn}>
                    <AppButton btnType="submit" labelText="Add Todo" isValid={!userInput} onClick={onClickHendleAddTodo} classMain={Styles.addTodoBtn}/>
                </div>
            </div>
            <div className={Styles.listWrapper}>
                {todo.map((item, index) => (
                    <TodoList key={index} todoText={item} onClickEdit={onClickHendleEdit} onClickDelete={() => onClickHendleDelete(index)}/>
                ))}
            </div>
         </div>
     </div>
 )   
}

export default Todos;