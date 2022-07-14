import './App.css';
import{useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addword, removeword, resetword} from "./redux/word"
import {saveword} from "./redux/save"
import {update} from "./redux/solution"
import Grid from "./components/Grid"
import Data from "./data"

function App() {
  const {word} =  useSelector(state => state.word);
  const {words} = useSelector(state => state.save);
  const {solution} = useSelector(state => state.solution);
  const dispatch = useDispatch();

  var zolutions = ["LUCID", "MUSIC", "HUNTS", "MASKS"]
  
  const handleColor = (id) => {
    var boks = document.getElementById(id);
   
    if (boks.style.backgroundColor == "rgb(233, 190, 78)"){
      boks.style.backgroundColor = "rgb(238, 233, 190)"
    }

    else if (boks.style.backgroundColor == "rgb(233, 190, 79)") {
      boks.style.backgroundColor = "rgb(55, 49, 26)"
      }

    else if (boks.style.backgroundColor == "rgb(55, 49, 26)") {
    boks.style.backgroundColor = "rgb(233, 190, 79)"
    }
   

    else {
      boks.style.backgroundColor = "rgb(233, 190, 78)";
    }

  }
 
  
  const handleClick = (value, id) => {
    handleColor(id);
    let newLetter = {id, value}

    var ids = word.map((word)=> word.id)

    if(ids.includes(newLetter.id )) {
      dispatch(removeword(newLetter))
    }

    else {
      dispatch(addword(newLetter));
      
    };
  };  
  
 const submitWord = ()=> {
    
    if(word.length == 5) {
      let werd = ""
      let werdId = []
      word.map((woorrd)=> werd += woorrd.value)
      word.map((woorrd)=> werdId += woorrd.id)
      if(solution[0].includes(werd) && solution[1].includes(werdId)) {
        dispatch(update(werd))
        dispatch(saveword(word));
        dispatch(resetword());
        var buds = document.getElementsByClassName("bud");
        var duds =  document.getElementsByClassName("dud");
        for(let i = 0; i < buds.length; i++ ) {
          document.getElementById(buds[i].id).style.backgroundColor = "rgb(238, 233, 190)"
          
        }
        for(let i = 0; i < duds.length; i++ ) {
          document.getElementById(duds[i].id).style.backgroundColor = "rgb(55, 49, 26)"
        }
        }

        else{
          if(zolutions.includes(werd)){
            alert("You already formed that word Chief")
          }
          else{
            alert("Wrong word Chief")
          }
          
          dispatch(resetword());
          var buds = document.getElementsByClassName("bud");
          var duds =  document.getElementsByClassName("dud");

          for(let i = 0; i < buds.length; i++ ) {
          document.getElementById(buds[i].id).style.backgroundColor = "rgb(238, 233, 190)"
          
          }
          for(let i = 0; i < duds.length; i++ ) {
          document.getElementById(duds[i].id).style.backgroundColor = "rgb(55, 49, 26)"
          }
        }

    }
    

    else if (word.length < 5){
      var buds = document.getElementsByClassName("bud");
        var duds =  document.getElementsByClassName("dud");
      alert("Gotta be five letters chief");
      dispatch(resetword());
      for(let i = 0; i < buds.length; i++ ) {
        document.getElementById(buds[i].id).style.backgroundColor = "rgb(238, 233, 190)"
        
        }
        for(let i = 0; i < duds.length; i++ ) {
        document.getElementById(duds[i].id).style.backgroundColor = "rgb(55, 49, 26)"
        }
    }

    else{
      var buds = document.getElementsByClassName("bud");
        var duds =  document.getElementsByClassName("dud");
      alert("Wrong word Chief")
      dispatch(resetword());
      for(let i = 0; i < buds.length; i++ ) {
        document.getElementById(buds[i].id).style.backgroundColor = "rgb(238, 233, 190)"
        
        }
        for(let i = 0; i < duds.length; i++ ) {
        document.getElementById(duds[i].id).style.backgroundColor = "rgb(55, 49, 26)"
        }
    }
    
 }

 

 const handleHint = ()=> {
  console.log(solution[0])
  let werd = ""
  word.map((woorrd)=> werd += woorrd.value)
  let unsolved = solution[0].filter((word)=> werd.includes(word))
  console.log(words)

  }
 










  
  // THE RETURN STARTS HERE ....LOL
  return (
    <div className="App">
     <h2>EXPERIENCE THE JUNGLE</h2>

      <Grid handleClick={handleClick} />

      <div className="buttons">
      <button onClick={submitWord}>check</button>
      <button onClick={handleHint}>Hint</button>
      </div>

      <div className="solved">
        {words.map((word, i) => {
          let forming = ""
          for(let i = 0; i < word.length; i++ ) {
            forming += word[i].value;
          }
         
          return (<ul key={i}>
            <li>{forming[0]}</li>
            <li>{forming[1]}</li>
            <li>{forming[2]}</li>
            <li>{forming[3]}</li>
            <li>{forming[4]}</li>
          </ul>)
        }
            )
        
        }

      </div>

    </div>
   );
}

export default App;
