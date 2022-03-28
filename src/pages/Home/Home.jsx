import React, {useEffect, useRef, useState} from "react";
import "./Home.css";
import {fetchCandidates} from "../../utils/API.js";
import {getPersistentCandidatesData, setPersistentCandidatesData, transformCandidatesData} from "../../utils/helper.js";
import {FavoriteIcon} from "../../components/FavoriteIcon/FavoriteIcon";
import { Card } from "../../components/Card/Card.jsx";



/*
  This is a "React component", you don't really need to know react in dept,
*/
export const Home = () => {

  // once you populated candidates variable with data
  // search online how to "render an array of items in react" and add your implementation below (line 41)
  // to update the candidates variable, you need to use setCandidatesFunction
  // Note - every time you use this function, it will auto refresh your Home page, we call it in React - "Render".
  const [candidates, setCandidatesFunction] = useState({});
  
  
  // initial = true <=> initial upload of the homepage
  const [initial, setInitial] = useState(true);
  
  // ref, updated =  some number from 0 -> inf
  const ref = useRef(0);
  const [updated, setUpdated] = useState(0);

  // runs upon a change in the updated variable and backups data
  const update = () => {
    if (!initial){
      setPersistentCandidatesData(candidates,initial);
    }
    setInitial(false);
  };
 
  // this is "React Hook", a function that will be called ONCE, on every page load
  useEffect(() => {
    runOnHomePageLoad();
  }, []);

  // hook responsible for backuping data upon every data change
  useEffect(() => {
    update();
  }, [updated]);

  
  const runOnHomePageLoad = async () => {
    // once you will succeed getting the data, make it persistent as required.
    // if the data is already fetched and persistent - don't fetch it again, use the condition below
    const data = getPersistentCandidatesData();
    if (data) {
      setCandidatesFunction(data);
    } else {
      // replace the empty array once you implemented the fetching code with: await fetchCandidates()
      const fetchedData = await fetchCandidates();
      
      // replace the empty array once the data is transformed
      const transformedData = transformCandidatesData(fetchedData);

      //this function will save a "React State" and allow you to use the data via candidates variable outside.
      setCandidatesFunction(transformedData);
      setPersistentCandidatesData(transformedData);

    }
  }
  
  // creates an array of Card components persistent with the candidates data
  const createComponentArray =  (candidatesObj) => {
    let componentArray = []
    const keys = Object.keys(candidatesObj);
    keys.forEach((letterIndex,key1) => {
      candidatesObj[letterIndex].forEach((person,key2) => {
        componentArray.push(<Card className = "cards" key = {key1*10+key2} person={person} number = {ref} update={setUpdated}/>);
      });
    });
    return componentArray;
  };
  
  return (
    <div id="home">
    <div className="alldata">
      <div className="home-title">Firm's candidates</div>
      <div className="home-subtitle">Yoav Yaron</div>
      <div className="candidates-list">
        {createComponentArray(candidates)}
      </div>
      </div>
    </div>
  );
};
