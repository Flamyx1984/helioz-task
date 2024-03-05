import { useContext, useState, useRef } from "react";
import React from "react";

import { Context } from "./Context";

export default function Main() {
  const {
    setPartner,
    contracts,

    setExisting,
    confirmedUser,
    setConfirmedUser,
    setContracts,
  } = useContext(Context);

  const [searchTerm, setSearchTerm] = useState("");
  const userName = "admin";
  const password = "admin";
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  var checkuser = "";
  var checkpassword = "";

  const contractElements = contracts
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      } else if (
        item.company.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return item;
      }
    })
    .map((item) => {
      return (
        <div className="company">
          <h2>{item.company}</h2>

          <div>
            {item.details.map((el) => {
              return (
                <div className="contractcontainer">
                  <span>Contract name: {el.name} </span>
                  <span>Contract start: {el.start} </span>
                  <span>Contract ends: {el.end} </span>
                  <span>Comment: {el.comments} </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    });

  function newClient() {
    setPartner((prev) => !prev);
  }

  function newContract() {
    setPartner((prev) => !prev);
    setExisting((prev) => !prev);
  }

  function checkUser(e) {
    e.preventDefault();
    if (checkuser === userName && checkpassword === password) {
      setConfirmedUser((prev) => !prev);
    }else{
      alert("Wrong password or username")
      
    }
    inputRef.current.value = "";
    inputRef1.current.value = "";
  }

  function logOut() {
    setConfirmedUser((prev) => !prev);
  }

  function sortDate() {
    contracts.map((item) => {
      const dateForm = item.details.sort((a, b) => {
        return new Date(a.start) - new Date(b.start);
      });
      setContracts((prev) => [...prev], { details: dateForm });
    });
  }

  return (
    <div className="container">
      {confirmedUser ? (
        <div className="dropmenu">
          <button onClick={newClient}>Add new client</button>
          <button onClick={newContract}>
            Add new contract to existing client
          </button>
          <input
            type="text"
            placeholder="Search for company"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button onClick={sortDate}>Sort by date</button>

          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <form>
          <div className="login">
            <input
              type="text"
              placeholder="Enter your username:"
              onChange={(e) => (checkuser = e.target.value)}
              ref={inputRef}
            />
            <input
              type="text"
              placeholder="Enter your password:"
              onChange={(e) => (checkpassword = e.target.value)}
              ref={inputRef1}
            />
            <button className="okBtn" onClick={checkUser}>Ok</button>
          </div>
        </form>
      )}

      <div className="contracts">{contractElements}</div>
    </div>
  );
}
