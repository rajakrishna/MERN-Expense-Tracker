import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExp } from "./components/IncomeExp";
import { TranscationList } from "./components/TranscationList";

function App() {
	return (
		<div>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExp />
				<TranscationList />
			</div>
		</div>
	);
}

export default App;
