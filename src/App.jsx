import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Main from "./Routes";

function App() {
  return (
    <AnimatePresence>
      <Main />
    </AnimatePresence>
  );
}

export default App;
