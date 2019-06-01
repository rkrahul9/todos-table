import React,{ Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class RuleEditor extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: null
		}
	}

	render() {
		const data = [{
			name: 'Tanner Linsley',
			age: 26,
			friend: {
				name: 'Jason Maurer',
				age: 23,
			}
		},{
			name: 'John Linsley',
			age: 20,
			friend: {
				name: 'Jason Roy',
				age: 24,
			}
		},{
			name: 'Arya Lesley',
			age: 30,
			friend: {
				name: 'Joe Maurer',
				age: 24,
			}
		},{
			name: 'Arya Stark',
			age: 18,
			friend: {
				name: 'Sansa Stark',
				age: 24,
			}
		},{
			name: 'John Snow',
			age: 30,
			friend: {
				name: 'Tyrion Lannister',
				age: 35,
			}
		},{
			name: 'Jamie Lannister',
			age: 40,
			friend: {
				name: 'Tyrion Lannister',
				age: 35,
			}
		},{
			name: 'Jamie Longhorn',
			age: 50,
			friend: {
				name: 'Tywin Mills',
				age: 65,
			}
		}];

		const columns = [{
			Header: 'Name',
			accessor: 'name' // String-based value accessors!
		}, {
			Header: 'Age',
			accessor: 'age',
			Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		}, {
			id: 'friendName', // Required because our accessor is not a string
			Header: 'Friend Name',
			accessor: d => d.friend.name // Custom value accessors!
		}, {
			Header: props => <span>Friend Age</span>, // Custom header components!
			accessor: 'friend.age'
		}];

		return(
			<ReactTable
				data={data}
				columns={columns}
				defaultPageSize={15}
				loading={false}
				showPagination={true}
				showPageSizeOptions={false}
				getTrProps={(state, rowInfo) => {
					if (rowInfo && rowInfo.row) {
						return {
							onClick: (e) => {
								this.setState({
									selected: rowInfo.index
								})
							},
							style: {
								background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
								color: rowInfo.index === this.state.selected ? 'white' : 'black'
							}
						}
					}	else{
							return {}
						}
					}
				}
			/>	
		);
	}
} 