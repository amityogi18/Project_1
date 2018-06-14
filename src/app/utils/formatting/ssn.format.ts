export function formatSSN(val:string,mask:boolean=false) : string {

    if(!val)
      return '';
      
    let len : number;

     if (val) {
        val = val.toString().replace(/\D/g, "");
        len = val.length;
        if(len === 4){
          return "XXX-XX-" + val;
        }
        if (len < 4) {
          return val;
        } else if ((3 < len && len < 6)) {
          if (mask) {
            return "XXX-" + (val.substr(3));
          } else {
            return (val.substr(0, 3)) + "-" + (val.substr(3));
          }
        } else if (len > 5) {
          if (mask) {
            return "XXX-XX-" + (val.substr(5, 4));
          } else {
            return (val.substr(0, 3)) + "-" + (val.substr(3, 2)) + "-" + (val.substr(5, 4));
          }
        }
      }
}