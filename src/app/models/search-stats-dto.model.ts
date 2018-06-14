import { ISearchStatsDto } from "@app/interfaces/isearch-stats-dto";

export class SearchStatsDTO implements ISearchStatsDto{
    
        public noOfSearchedRecords : number;
        public noOftotalRecords   : number;
        public searchTime         : {
            nano        : number,
            negative    : boolean,
            seconds     : number,
            units       : any[],
            zero        : boolean
        }
}