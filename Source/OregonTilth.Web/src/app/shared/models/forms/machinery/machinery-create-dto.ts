export class MachineryCreateDto {
    WorkbookID: number;
    MachineryName: string;
    StandardMachineryCost: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
