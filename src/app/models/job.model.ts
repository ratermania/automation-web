export class Job {
	public id: number;
	public name: string;
	public failures: number;
	public interval: number;
	public isRunning: boolean;
	public isEnabled: boolean;
	public nextRunTime: Date;
	public lastRunTime: Date;
}