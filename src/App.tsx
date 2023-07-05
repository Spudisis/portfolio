import ThemeProvider from "styles/provider/provider";
import { Routes } from "./routes";

function App() {
	return (
		<ThemeProvider>
			<Routes />
		</ThemeProvider>
	);
}

export default App;
