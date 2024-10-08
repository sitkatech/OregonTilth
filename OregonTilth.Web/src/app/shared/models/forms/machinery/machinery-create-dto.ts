export class MachineryCreateDto {
    WorkbookID: number;
    MachineryName: string;
    StandardMachineryCost: number;
    Notes: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
