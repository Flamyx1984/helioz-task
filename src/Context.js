import React, { useState } from "react";
import {v4} from "uuid"

const Context = React.createContext();

function ContextProvider(props) {
  const [partner, setPartner] = useState(false);
  const [existing, setExisting] = useState(false);
  const [confirmedUser, setConfirmedUser] = useState(false);
  const [contracts, setContracts] = useState([
    {
      company: "INA",
      details: [
        {
          name: "Oil",
          start: "2024-03-06",
          end: "2025-03-06",
          comments:
            "Succes of this contract wil be of great importance for our company ",
          id:v4()  
        },
        {
          name: "Petrol",
          start: "2022-03-06",
          end: "2023-03-06",
          comments: "Losing this contract will be end of us",
          id:v4()  
        },
      ],
    },
    {
      company: "Petrokemija",
      details: [
        {
          name: "Free oil for everyone",
          start: "2024-03-06",
          end: "2025-03-06",
          comments: "April fools contract  ",
          id:v4()  
        },
        {
          name: "Electricity is not an answer",
          start: "1.1.2023",
          end: "2024-03-06",
          comments: "Sold out souls for this one",
          id:v4()  
        },
      ],
    },
    {
      company: "Konzum",
      details: [
        {
          name: "Food",
          start: "2024-03-06",
          end: "2025-03-06",
          comments: "Homegrown food",
          id:v4()  
        },
        {
          name: "Drinks",
          start: "2022-03-06",
          end: "2023-03-06",
          comments: "We will get free beer for this one ",
          id:v4()  
        },
      ],
    },
    {
      company: "PERINA",
      details: [
        {
          name: "Oil",
          start: "2024-03-06",
          end: "2025-03-06",
          comments:
            "Succes of this contract wil be of great importance for our company ",
            id:v4()  
        },
        {
          name: "Petrol",
          start: "2022-03-06",
          end: "2023-03-06",
          comments: "Losing this contract will be end of us",
          id:v4()  
        },
      ],
    }
  ]);

  return (
    <Context.Provider
      value={{
        partner,
        setPartner,
        contracts,
        setContracts,
        existing,
        setExisting,
        confirmedUser,
        setConfirmedUser,
        
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
