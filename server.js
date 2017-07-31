var http = require("http");

http.createServer((req, res) => {
    res.write(JSON.stringify({
        "name": "David",
        "age": 11,
        "weight": 60,
        "feet": 4,
        "inch": 6,
        "hair": "brown"
    }));
    res.end();
}).listen(8082);


let data = [
	{
		key: 1,
		type: 0,
		name: 'Fast & Furious',
		director: 'Rob Cohen. John singh. Lin Yi bin. James wan',
		actor: 'Paul walker (1973 ~ 2013), vin diesel, dawn, Johnson, jordana brewster, Jason statham, michelle rodriguez, tyrese Gibson, he, Chris, Lucas black, Gail and flower, ChengKang',
		image: 'https://github.com/wix/react-native-navigation/raw/master/logo.png',
		appraise: 9.0,
		link: 'Fast & Furious1'
	},
	{
		key: 2,
		type: 0,
		name: 'Fast & Furious',
		director: 'Rob Cohen. John singh. Lin Yi bin. James wan',
		actor: 'Paul walker (1973 ~ 2013), vin diesel, dawn, Johnson, jordana brewster, Jason statham, michelle rodriguez, tyrese Gibson, he, Chris, Lucas black, Gail and flower, ChengKang',
		image: 'https://github.com/wix/react-native-navigation/raw/master/logo.png',
		appraise: 9.0,
		link: 'Fast & Furious2'
	},
	{
		key: 3,
		type: 0,
		name: 'Fast & Furious',
		director: 'Rob Cohen. John singh. Lin Yi bin. James wan',
		actor: 'Paul walker (1973 ~ 2013), vin diesel, dawn, Johnson, jordana brewster, Jason statham, michelle rodriguez, tyrese Gibson, he, Chris, Lucas black, Gail and flower, ChengKang',
		image: 'https://github.com/wix/react-native-navigation/raw/master/logo.png',
		appraise: 9.0,
		link: 'Fast & Furious2'
	},
	{
		key: 4,
		type: 1,
		list: [
			{
				key: 11,
				text: 'ListHeaderComponent',
				pic: 'https://github.com/wix/react-native-navigation/raw/master/logo.png'
			},
			{
				key: 12,
				text: 'ListHeaderComponent',
				pic: 'https://github.com/wix/react-native-navigation/raw/master/logo.png'
			},
			{
				key: 13,
				text: 'ListHeaderComponent',
				pic: 'https://github.com/wix/react-native-navigation/raw/master/logo.png'
			},
			{
				key: 14,
				text: 'ListHeaderComponent',
				pic: 'https://github.com/wix/react-native-navigation/raw/master/logo.png'
			},
			{
				key: 15,
				text: 'ListHeaderComponent',
				pic: 'https://github.com/wix/react-native-navigation/raw/master/logo.png'
			},
		]
	},
	{
		key: 5,
		type: 0,
		name: 'Fast & Furious',
		director: 'Rob Cohen. John singh. Lin Yi bin. James wan',
		actor: 'Paul walker (1973 ~ 2013), vin diesel, dawn, Johnson, jordana brewster, Jason statham, michelle rodriguez, tyrese Gibson, he, Chris, Lucas black, Gail and flower, ChengKang',
		image: 'https://github.com/wix/react-native-navigation/raw/master/logo.png',
		appraise: 9.0,
		link: 'Fast & Furious2'
	},
	{
		key: 6,
		type: 0,
		name: 'Fast & Furious',
		director: 'Rob Cohen. John singh. Lin Yi bin. James wan',
		actor: 'Paul walker (1973 ~ 2013), vin diesel, dawn, Johnson, jordana brewster, Jason statham, michelle rodriguez, tyrese Gibson, he, Chris, Lucas black, Gail and flower, ChengKang',
		image: 'https://github.com/wix/react-native-navigation/raw/master/logo.png',
		appraise: 9.0,
		link: 'Fast & Furious2'
	},
	{
		key: 7,
		type: 0,
		name: 'Fast & Furious',
		director: 'Rob Cohen. John singh. Lin Yi bin. James wan',
		actor: 'Paul walker (1973 ~ 2013), vin diesel, dawn, Johnson, jordana brewster, Jason statham, michelle rodriguez, tyrese Gibson, he, Chris, Lucas black, Gail and flower, ChengKang',
		image: 'https://github.com/wix/react-native-navigation/raw/master/logo.png',
		appraise: 9.0,
		link: 'Fast & Furious2'
	},
]

http.createServer((req, res) => {
    res.write(JSON.stringify(data));
    res.end();
}).listen(8083);