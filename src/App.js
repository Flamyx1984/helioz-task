import React, { useContext } from "react";
import NewClient from "./NewClient";
import Main from "./Main";
import { Context } from "./Context";


export default function App() {
  const { partner, setPartner, existing } = useContext(Context);

  return (
    <div>
      {partner ? (
        <NewClient />
      ) : (
        <div>
          <Main />
        </div>
      )}
    </div>
  );
}
