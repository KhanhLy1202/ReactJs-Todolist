import React from 'react';
import Title from './component/Title';
import Form from './component/Form';
import List from './component/List';
import Control from './component/Control';
// import demo from './training/demo';
// import tasks from './mock/tasks';
import { filter, includes, orderBy as funOrderBy, remove, reject } from 'lodash';
const uuidv4 = require('uuid/v4');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isShowToggle: false,
			strSearch: '',
			orderBy: 'name',
			orderDir: 'asc',
			itemSelected: null
		};
	}

	UNSAFE_componentWillMount() {
		let items = JSON.parse(localStorage.getItem("task"));
		this.setState({
			items: items
		})
	}

	handleSubmit = (item) => {
		console.log(item);
		let { items } = this.state;
		let id = null;
		if (item.id !== '') {
			items = reject(items, { id: item.id });
			id = item.id;
		} else {
			id = uuidv4();
		}

		items.push({
			id: id,
			name: item.name,
			level: +item.level // 0 Small, 1 Medium, 2 High
		})

		this.setState({
			items: items,
			isShowToggle: false
		});

		localStorage.setItem('task', JSON.stringify(items));
	}

	handleToggleForm = () => {
		this.setState({
			isShowToggle: !this.state.isShowToggle,
			itemSelected: null
		})
	}

	closeForm = () => {
		this.setState({
			isShowToggle: false
		})
	}

	handleSearch = (value) => {
		this.setState({
			strSearch: value
		})
	}

	handleSort = (orderBy, orderDir) => {
		this.setState({
			orderBy: orderBy,
			orderDir: orderDir
		})
	}

	handleDelete = (id) => {
		let items = this.state.items;
		remove(this.state.items, (item) => {
			return item.id === id;
		})
		this.setState({
			items: this.state.items
		});

		localStorage.setItem('task', JSON.stringify(items));

	}

	handleEdit = (item) => {
		this.setState({
			itemSelected: item,
			isShowToggle: true
		})
	}



	render() {
		let itemsOrigin = [...this.state.items];
		let items = [];
		let elementForm = null;
		let { orderBy, orderDir, isShowToggle, strSearch, itemSelected } = this.state;

		// Search
		items = filter(itemsOrigin, (item) => {
			return includes(item.name.toLowerCase(), strSearch);
		});

		// Sort
		items = funOrderBy(items, [orderBy], [orderDir]);



		if (isShowToggle) {
			elementForm = <Form
				onClickCancel={this.closeForm}
				onClickSubmit={this.handleSubmit}
				itemSelected={itemSelected}
			/>
		}
		return (

			<div className="container">
				{/* <!-- TITLE : START --> */}
				<Title />
				{/* <!-- TITLE : END --> */}

				{/* <!-- CONTROL (SEARCH + SORT + ADD) : START --> */}
				<Control
					onClickAdd={this.handleToggleForm}
					isShowToggle={isShowToggle}
					onClickSearchGo={this.handleSearch}
					orderBy={orderBy}
					orderDir={orderDir}
					onClickSort={this.handleSort}
				/>
				{/* <!-- CONTROL (SEARCH + SORT + ADD) : END -->

          <!-- FORM : START --> */}
				{elementForm}
				{/* <!-- FORM : END -->

            <!-- LIST : START --> */}
				<List items={items} onClickDelete={this.handleDelete} onClickEdit={this.handleEdit} />
				{/* <!-- LIST : END --> */}
			</div>
		);
	}
}

export default App;
