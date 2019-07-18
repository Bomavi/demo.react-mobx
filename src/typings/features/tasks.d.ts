declare interface TaskType {
	_id: string;
	description: string;
	isCompleted: boolean;
	author: any; // TODO: have to be as separate object USER
	createdAt: string;
	updatedAt: string;
}

declare interface TaskSearchType {
	q?: string;
}
