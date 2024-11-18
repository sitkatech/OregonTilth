import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { WorkbookDto } from "../models/generated/workbook-dto";

@Injectable({
    providedIn: "root",
})
export class WorkbookCreatedService {
    private workbookCreated: BehaviorSubject<WorkbookDto> =
        new BehaviorSubject<WorkbookDto>(null);
    public workbookCreatedObservable$ = this.workbookCreated.asObservable();

    public workbookDeleted: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    public workbookDeleted$: Observable<boolean> =
        this.workbookDeleted.asObservable();
    constructor() {}

    public setWorkbookCreated(workbook: WorkbookDto) {
        this.workbookCreated.next(workbook);
    }
}
