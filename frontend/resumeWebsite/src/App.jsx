import { useState } from "react";
import { Outlet } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <Outlet
        context={{
          loading,
          setLoading,
          error,
          setError,
        }}
      />
    </div>
  );
}

export default App;
