import { createBrowserRouter, RouterProvider } from "react-router-dom"
import route from "./routes/route"
import { useEffect } from "react"
import { api, setAuthToken } from "./libs/api"
import { useUser } from "./state/store"
import { ToastContainer } from 'react-toastify'


function App() {
  const setUser = useUser(state => state.setUser)
  const clearUser = useUser(state => state.clearUser)

  async function checkLogin() {
    try {
      const token = localStorage.getItem("token")
      if (token) {
        setAuthToken(token)
      }
      const user = await api.get("/auth/me")
      setUser({ name: user.data.name, email: user.data.email, phone: user.data.phone })


    } catch (error) {
      clearUser()
      console.log(error)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <>
      <RouterProvider router={createBrowserRouter(route)} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
