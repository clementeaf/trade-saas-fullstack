import { Link } from 'react-router-dom';
import { routes } from '../../routes';

function Sidebar(): React.JSX.Element {
  return (
    <section className="w-[10%] bg-white rounded-lg p-4 flex flex-col gap-4">
      <Link
        to={routes.home}
        className="p-2 rounded hover:bg-blue-50 transition-colors"
      >
        Home
      </Link>
      <Link
        to={routes.operaciones}
        className="p-2 rounded hover:bg-blue-50 transition-colors"
      >
        Operaciones
      </Link>
    </section>
  );
}

export default Sidebar;

