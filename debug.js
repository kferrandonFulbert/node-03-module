class debug {
    constructor() {
        this.author="kferrandon";
        this.version = '1.0.0';
    }
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