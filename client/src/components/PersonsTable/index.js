import configObj from './config';
import style from './style';

const PersonsTable = ({ persons }) => {
	const { tableHeaders } = configObj;

	return (
		<table style={style.table}>
			<thead style={style.tableRow}>
				<tr style={style.tableRow}>
					{tableHeaders.map(({ key, label }) => (
						<th style={style.tableRow} key={`${key}-table-header`}>
							{label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{persons.map(person => (
					<tr key={`${person.id}-table-row`}>
						{tableHeaders.map(({ key }) => (
							<td style={style.tableRow} key={`${person.id}-${key}-table-data`}>
								{person[key]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PersonsTable;
