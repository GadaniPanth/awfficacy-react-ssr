import React, { useEffect } from "react";

const App = () => {
  useEffect(async () => {
    const res = await fetch(
      "http://192.168.1.24/Panth/php-codeigniter-3/index.php/users"
    );
    console.log(await res.json());
  }, []);

  return <h1>Hello from React SSR!</h1>;
};

export default App;
