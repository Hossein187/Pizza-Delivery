import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const handleIncreaseItem = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  const handleDecreaseItem = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <>
      <Button type="button" style="round" onClick={handleDecreaseItem}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="button" style="round" onClick={handleIncreaseItem}>
        +
      </Button>
    </>
  );
}

export default UpdateItemQuantity;
