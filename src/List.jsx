function List(){  
const fruits =[{id:1,name:"apple", calories:95},
               {id:2,name:"orange" ,calories:45},
               {id:3,name:"coconut",calories:105},
               {id:4,name:"pineapple",calories:37}];
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name));// Reverse alphabetical
    //fruits.sort((a,b) => a.calories - b.calories);// Numeric order 
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                         {lowCalFruit.name}: &nbsp;
                                        <b>{lowCalFruit.calories}</b> </li>);

            return(<ol>{listItems}</ol>);

}


    

export default List