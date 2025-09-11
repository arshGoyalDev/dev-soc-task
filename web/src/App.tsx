import { useEffect, useState } from "react";
import { GET_NAME_ROUTE } from "./utils/contants";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch(GET_NAME_ROUTE, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        const data = await response.json();
        setName(data.name);
      }
    };

    fetchName();
  }, []);

  return (
    <main>
      <h1>{ name }</h1>
    </main>
  )
}

export default App;
