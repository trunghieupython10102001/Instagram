import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { Main } from "../../components/Main/Main"

export const Home = () => {
	return (
		<div>
			<Header />
			<Main />
			<Outlet />
		</div>
	)
}