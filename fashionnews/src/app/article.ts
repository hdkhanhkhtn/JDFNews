export class Article {
	id: number;
	title: string;
	body: string;
	url: string;
	thumbnail: string;
	site_name: string;
	archive_type: string;
	slug: string;
	cat_id: number;
	post_date: string;
}

export class UserInfo {
	id: number;
	email: string;
	name: string;
	phone: string;
	username: string;
	website: string;

	address: {
		city: string;
		geo: {
			lat: number;
			lng: number;
		};
		street: string;
		suite: string;
		zipcode: string;
	};

	company: {
		bs: string;
		catchPhrase: string;
		name: string;
	}
}

export class Category {
	id: number;
	slug: string;
	name: string;
	name_jp: string;
}

export class Articles {
	status: string;
	status_code: number;
	message: string;
	data: {
		category: Category;
		articles: Article[];
		paginator: {
			total_count: number;
			total_pages: number;
			current_page: number;
			limit: number;
		}
	}
}