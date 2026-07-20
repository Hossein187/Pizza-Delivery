import { useFetcher, useLoaderData } from 'react-router-dom';

import OrderItem from './OrderItem';

import { useEffect } from 'react';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher],
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
              priority
            </span>
          )}
          <span className="items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
            {status || 'unknown'} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-900">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div className="space-y-4 rounded-3xl bg-stone-200 px-6 py-5">
        <h3 className="text-lg font-semibold text-stone-900">Items</h3>
        <ul className="divide-y divide-stone-800 border-b border-t text-stone-600">
          {cart.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              isLoadingIngredients={false}
              ingredients={[]}
            />
          ))}
        </ul>
      </div>

      <div className="space-y-2 rounded-3xl bg-stone-200 px-6 py-5">
        <h3 className="text-lg font-semibold text-stone-900">Bill</h3>
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export default Order;
