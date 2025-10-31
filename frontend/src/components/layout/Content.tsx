interface ContentProps {
  children?: React.ReactNode;
}

function Content({ children }: ContentProps): React.JSX.Element {
  return (
    <section className="w-full h-full bg-white rounded-lg p-4">
      {children || 'Main Content'}
    </section>
  );
}

export default Content;

