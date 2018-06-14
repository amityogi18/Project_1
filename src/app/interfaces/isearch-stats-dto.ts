export interface ISearchStatsDto {
    
        noOfSearchedRecords : number,
        noOftotalRecords   : number,
        searchTime         : {
            nano        : number,
            negative    : boolean,
            seconds     : number,
            units       : any[],
            zero        : boolean
        }
 
}
