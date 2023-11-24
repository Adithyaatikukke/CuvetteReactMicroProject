import Game from "./components/Play/Play";
import Quote from "../src/components/Quote/Quote";
import { Toaster } from "react-hot-toast";
function App() {
	return (
		<div className="app">
			<Toaster
				position="top-right"
				containerStyle={{
					top: "20px",
					right: 0
				}}
			/>
			<Quote />
			<Game />
		</div>
	);
}

export default App;