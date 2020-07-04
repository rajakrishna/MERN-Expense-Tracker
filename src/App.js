import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExp } from "./components/IncomeExp";
import { TranscationList } from "./components/TranscationList";
import { AddTranscation } from "./components/AddTranscation";

function App() {
	return (
		<div>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExp />
				<TranscationList />
				<AddTranscation />
			</div>
		</div>
	);
}

export default App;
