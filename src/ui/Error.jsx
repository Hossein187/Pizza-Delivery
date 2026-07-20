import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-8">
      <h1 className="text-2xl font-semibold text-stone-900">Something went wrong 😢</h1>
      <p className="text-sm text-stone-600">{error?.data || error?.message || 'Unknown error'}</p>

      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
