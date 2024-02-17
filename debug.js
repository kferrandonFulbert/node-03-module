/**
@author kevin ferrandon <kevin.ferrandon@lyceefulbert.fr>
@version 1.0.0
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