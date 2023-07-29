/* eslint-disable @typescript-eslint/no-floating-promises */
import * as React from "react";
import "./RHistoryTable.css";
import axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const baseUrl = "http://localhost:4000";

const RHistoryTable = () => {
	const [rows, setRows] = React.useState<GridRowsProp>([]);
	const [columns, setColumns] = React.useState<GridColDef[]>([]);
	const fetchData = async () => {
		try {
			const signature = localStorage.getItem("signature");

			await axios
				.get(`${baseUrl}/riders/rider-history`, {
					headers: {
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						Authorization: `Bearer ${signature}`,
					},
				})
				.then((res) => {
					setRows(res?.data?.history);
					setColumns([
						{ field: "col1", headerName: "Location", width: 200 },
						{ field: "col2", headerName: "Receivers Contact", width: 200 },
						{ field: "col3", headerName: "Date/Time", width: 200 },
						{ field: "col4", headerName: "Status", width: 200 },
					]);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.error(error);
		}
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="datatable">
			<div className="datatableTitle">Rider History</div>
			<DataGrid
				style={{
					height: "70vh",
					background: "#FFF",
					width: "100%",
					border: "none",
				}}
				rows={rows}
				columns={columns}
			/>
		</div>
	);
};

export default RHistoryTable;
