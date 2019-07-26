declare interface TaskType {
	_id: string;
	description: string;
	isCompleted: boolean;
	createdAt: string;
	updatedAt: string;
}

declare type TasksSearchKeys = 'q';

declare interface TasksSearchType {
	q?: TasksSearchKeys;

	// ? pagination options
	size?: number;
	page?: number;
}
