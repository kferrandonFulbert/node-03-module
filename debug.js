/**
@author kevin ferrandon <kevin.ferrandon@lyceefulbert.fr>
@version 0.0.1
**/
class debug {
    constructor() {  }
    log(msg) {
        console.log(msg);
    }
    info(msg) {
        console.info(msg);
    }
    error(msg) {
        console.error(msg);
    }
}
var exports=module.exports=new debug();