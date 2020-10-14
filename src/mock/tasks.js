const uuidv4 = require('uuid/v4');
let items = [
	{
		id: uuidv4(),
		name:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c1',
		level: 0 // 0 Small, 1 Mediem, 2 High
	},
	{
		id: uuidv4(),
		name:
			'Abc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c2',
		level: 1 // 0 Small, 1 Mediem, 2 High
	},
	{
		id: uuidv4(),
		name:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c3',
		level: 2 // 0 Small, 1 Mediem, 2 High
	},
	{
		id: uuidv4(),
		name:
			'123Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c4',
		level: 0 // 0 Small, 1 Mediem, 2 High
	}
];
export default items;
