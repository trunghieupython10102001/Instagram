import { Routes, Route } from "react-router-dom"
import "./App.css"
import CreatePost from "./components/CreatePost/CreatePost"
import Requireauth from "./components/RequireAuth/RequireAuth"
import { AuthProvider } from "./contexts/AuthContext"
import { Home } from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<Requireauth>
								<Home />
							</Requireauth>
						}
					>
						<Route path="/create" element={<CreatePost />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
		</AuthProvider>
	)
}

export default App
