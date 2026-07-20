import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type="reset" style="small" onClick={handleClearCart}>
      Remove
    </Button>
  );
}

export default DeleteItem;
