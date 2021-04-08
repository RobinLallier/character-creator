import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: " hsl(195deg, 20%, 86%)",
          position: "fixed",
          bottom: 0,
        }}
      />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
