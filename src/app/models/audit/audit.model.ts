import { IAudit } from '../../interfaces/audit/iaudit';

export class AuditModel implements IAudit {
    enteredDate: string;
    enteredBy: string;
    updatedDate: string;
    updatedBy: string;

    constructor (
        enteredDate: string,
        enteredBy: string,
        updatedDate: string,
        updatedBy: string
    ) {
        this.enteredDate = enteredDate;
        this.enteredBy = enteredBy;
        this.updatedDate = updatedDate;
        this.updatedBy = updatedBy;
    }
}
