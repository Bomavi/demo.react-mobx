declare type TasksSearchKeys = 'q';

declare interface TasksSearchType {
	q?: TasksSearchKeys;

	// ? pagination options
	size?: number;
	page?: number;
}

declare interface TaskType {
	_id: string;
	description: string;
	completed: boolean;
	createdAt: string;
	updatedAt: string;
}

declare interface TaskUpdateSchema {
	description?: string;
	completed?: boolean;
}
