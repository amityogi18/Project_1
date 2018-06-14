import { ISearchStats } from "../interfaces/isearch-stats";

export class SearchStats implements ISearchStats {

    constructor(public records : number, public time : number){}

    public totalRecordsSearched  : number = this.records;
    public totalReturnTime       : number = this.time;
}