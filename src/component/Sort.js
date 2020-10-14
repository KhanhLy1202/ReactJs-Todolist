import React from 'react';

class Sort extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
		this.handleSort = this.handleSort.bind(this);
	}

	handleSort(orderBy, orderDir) {
		this.props.onClickSort(orderBy, orderDir);
		console.log(orderBy, orderDir);
	}

	render() {
		let {orderBy, orderDir} = this.props;
		let strSort = orderBy + ' ' + orderDir;

		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="dropdown">
					<button
						className="btn btn-default dropdown-toggle"
						type="button"
						id="dropdownMenu1"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
					>
						Sort by <span className="caret"></span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<li><a href="#/" onClick={()=> this.handleSort('name', 'asc')} role="button">Name ASC</a></li>
						<li><a href="#/" onClick={()=> this.handleSort('name', 'desc')} role="button">Name DESC</a></li>
						<li role="separator" className="divider"></li>
						<li><a href="#/" onClick={()=> this.handleSort('level', 'asc')} role="button">Level ASC</a></li>
						<li><a href="#/" onClick={()=> this.handleSort('level', 'desc')} role="button">Level DESC</a></li>
					</ul>
					<span className="label label-success label-medium">{strSort}</span>
				</div>
			</div>
		);
	}
}

export default Sort;
