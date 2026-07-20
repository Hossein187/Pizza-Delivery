import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center px-4 py-3">
      <LinkButton to={'/menu'}>&larr; Back to menu</LinkButton>

      <p className="mt-7 text-lg font-semibold text-gray-600">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
