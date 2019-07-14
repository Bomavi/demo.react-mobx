declare interface StringTMap<T = string> {
	[key: string]: T;
}
declare interface NumberTMap<T = string> {
	[key: number]: T;
}

type DynamicImportType = () => Promise<{ default: React.ComponentType<any> }>;
type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>;
