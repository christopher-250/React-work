

import Student from './Student.jsx'
function App() {
  return(
    <>
    <Student name ="Spongebob" age={30} isStudent ={true}/>
    <Student name ="Patrick" age = {30} isStudent ={false}/>
    <Student name ="Yves" age={50} isStudent ={true}/>
    <Student name ="Yvan" age={40} isStundent={false}/>
    <Student/>
    </>
  );  
}

export default App
