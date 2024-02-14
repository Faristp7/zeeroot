import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleLogin } from "../Redux/user/loginSlice"

export default function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        const userData = {
            username : "",
            isLoggedIn : false
        }
        dispatch(handleLogin(userData))
        navigate("/")
    }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
