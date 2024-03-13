import React, { useContext, useState } from "react";
import { Context } from "./Context";
import {v4} from "uuid"
export default function NewClient() {
  const {
    contracts,
    setContracts,
    partner,
    setPartner,
    existing,
    setExisting,
  } = useContext(Context);
  const [companyName, setCompanyName] = useState("");
  const [contractName, setContractName] = useState("");
  const [contractStart, setContractStart] = useState();
  const [contractEnds, setContractEnds] = useState();
  const [commentary, setCommentary] = useState("");
  
  function handleCompanyChange(event) {
    setCompanyName(event.target.value);
  }
  function handleContractName(e) {
    setContractName(e.target.value);
  }

  function handleContractStart(e) {
    setContractStart(e.target.value);
  }

  function handleContractEnd(e) {
    setContractEnds(e.target.value);
  }

  function handleComments(e) {
    setCommentary(e.target.value);
  }
  function submitNewCompany(event) {
    event.preventDefault();
    
    
    const newCompany = {
      company: companyName,
      details: [
        {
          name: contractName,
          start: contractStart,
          end: contractEnds,
          comments: commentary,
          id:v4()
        },
      ],
    };
    var filterName=contracts.filter((el)=>{return el.company.toLowerCase() === newCompany.company.toLowerCase()})
    console.log(filterName.length)
    
    
    console.log(filterName.length)
    if (filterName.length === 0){
      console.log(filterName.length)
      setContracts((prev) => [...prev, newCompany]);
      setPartner((prev) => !prev);
      

    }
   
    
      
    else if(filterName.length===1) {
      setContracts((prev) =>
        prev.map((el) => {
          if (el.company.toLowerCase() === newCompany.company.toLowerCase()) {
            return {
              ...el,
              details: [
                ...el.details,
                {
                  name: contractName,
                  start: contractStart,
                  end: contractEnds,
                  comments: commentary,
                  id:v4()
                },
              ],
            };
          }
          return el;
        })
      );
      setPartner(false);
      setExisting(false);
    }
  }

  function handleSelectCompany(event) {
    setCompanyName(event.target.value);
  }
  function cancel(e) {
    e.preventDefault();
    setPartner(false);
    setExisting(false);
  }

  return (
    <div>
      <form className="submitform" onSubmit={submitNewCompany}>
        {existing ? (
          <select onChange={handleSelectCompany}>
            <option>Select existing company</option>
            {contracts.map((contract) => (
              <option value={contract.company}>{contract.company}</option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            placeholder="Company"
            onChange={handleCompanyChange}
            required
          />
        )}
        <input
          type="text"
          placeholder="Contract name"
          onChange={handleContractName}
          required
        />
        <input
          type="date"
          placeholder="Contract starts"
          onChange={handleContractStart}
          required
        />
        <input
          type="date"
          placeholder="Contract ends"
          onChange={handleContractEnd}
          required
        />

        <textarea
          className="text"
          placeholder="Enter your comment here"
          onChange={handleComments}
        />

        <button>Submit</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
}
