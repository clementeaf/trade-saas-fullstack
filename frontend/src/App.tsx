function App(): React.JSX.Element {
  return (
    <div className="w-screen h-screen bg-blue-50 flex p-8 gap-6">
      <section className="w-[10%] bg-white rounded-lg p-4">Sidebar</section>
      <div className="w-full flex flex-col gap-4 justify-start items-start">
        <section className="w-full bg-white rounded-lg p-4">Upbar</section>
        <section className="w-full h-full bg-white rounded-lg p-4">Main Content</section>
      </div>
    </div>
  );
}

export default App;
