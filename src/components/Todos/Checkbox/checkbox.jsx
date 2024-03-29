import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { initialTodo, checkboxChecked } from '../../../features/todo-app/todoAppSlice';

export const CheckboxInput = ({ index, list, id }) => {
    const initialList = useSelector(initialTodo);
    const dispatch = useDispatch();

    const itemTitle = list[index].title;
    let initialIndex = null;

    for (let i = 0; i < initialList.length; i++) {
        if (initialList[i].title === itemTitle) {
            initialIndex = i;
        }
    }

    return (
        <Checkbox
            sx={{ color: 'white' }}
            id={id}
            checked={list[index].completed}
            onClick={(e) => dispatch(checkboxChecked({
                index: initialIndex,
                checked: e.target.checked
            }))}
        />
    )
}
