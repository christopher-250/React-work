
import List from './List.jsx'
function App() {

  const fruits =[{id:1,name:"apple", calories:95},
               {id:2,name:"orange" ,calories:45},
               {id:3,name:"coconut",calories:105},
               {id:4,name:"pineapple",calories:37}];

  const Vegetables  =[{id:5,name:"carrots", calories:110},
               {id:6,name:"celery" ,calories:15},
               {id:7,name:"corn",calories:45},
               {id:8,name:"broccoli",calories:60}];

  return (
    <> 
    {fruits.length > 0 && <List items={fruits} category = "Fruits"/>}
    {Vegetables.length > 0 && <List items={Vegetables} category = "Vegetables"/>}
    </>);
  
}

export default App
