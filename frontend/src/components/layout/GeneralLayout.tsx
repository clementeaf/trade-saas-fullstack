import Sidebar from './Sidebar';
import Upbar from './Upbar';
import Content from './Content';

interface GeneralLayoutProps {
  children?: React.ReactNode;
}

function GeneralLayout({ children }: GeneralLayoutProps): React.JSX.Element {
  return (
    <div className="w-screen h-screen bg-blue-50 flex p-8 gap-6">
      <Sidebar />
      <div className="w-full flex flex-col gap-4 justify-start items-start">
        <Upbar />
        <Content>{children}</Content>
      </div>
    </div>
  );
}

export default GeneralLayout;

