function UserGreeting(props){
const WelcomeMessage= <h2 className="Welcome-message">
                       Welcome {props.username}
                       </h2>
const LoginPrompt = <h2 className="Login-prompt">
                    Please login to continue
                    </h2>

    return(props.isLoggedIn? WelcomeMessage:LoginPrompt)
}
export default UserGreeting