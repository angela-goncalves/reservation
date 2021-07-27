// import { useState, useEffect } from "react";

// export default function useLocalStorage({ key, inicialValue }) {
//   const [state, setState] = useState(
//     () => JSON.parse(window.localStorage.getItem(key)) || inicialValue
//   );

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// }
