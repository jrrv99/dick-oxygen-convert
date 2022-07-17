import { Footer, Convert, Header } from "@components";

import "@styles/App.css";

const App = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Convert />
      </main>
      <Footer />
    </div>
  );
};

export default App;
