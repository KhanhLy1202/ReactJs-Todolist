import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			taskId: '',
			taskName: '',
			level: '0'
		};
		
	}

	UNSAFE_componentWillMount() {
		this.updateItem(this.props.itemSelected)
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.updateItem(nextProps.itemSelected)
	}

	updateItem(item) {
		if(item !== null) {
			this.setState({
				taskId: item.id,
				taskName: item.name,
				level: item.level,
			});
		}
	}

	handleCancel = () => {
		this.props.onClickCancel();
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.value;
    const name = target.name;
    this.setState({
			[name]: value
		});
	}
	
	handleSubmit = (event) => {
		// alert('Task name ' + this.state.taskName);
		let item = {
			id: this.state.taskId,
			name: this.state.taskName,
			level: this.state.level
		}
		this.props.onClickSubmit(item);
    event.preventDefault();
	}
	
	render() {

		return (
			<div className="row">
				<div className="col-md-offset-7 col-md-5">
					<form onSubmit={this.handleSubmit} className="form-inline">
						<div className="form-group">
							<label className="sr-only" htmlFor="">label</label>
							<input 
								type="text" 
								className="form-control" 
								placeholder="Task Name" 
								value={this.state.taskName} 
								onChange={this.handleChange}
								name="taskName"
							/>
						</div>
						<div className="form-group">
							<label className="sr-only" htmlFor=""> label </label>
							<select 
								value={this.state.level} 
								onChange={this.handleChange} 
								className="form-control" 
								equired="required" 
								name="level"
								 >
								<option value={0}>Small</option>
								<option value={1}>Medium</option>
								<option value={2}>High</option>
							</select>
						</div>

						<button type="submit" value="Submit" className="btn btn-primary">Submit</button>
						<button onClick={this.handleCancel} type="button" className="btn btn-default">
							Cancel
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;
