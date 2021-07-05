class HybridColorString extends String {
    numeric;
    constructor(colorHexOrRGB) {
        let HEX = "000000";
        if (colorHexOrRGB instanceof Array){
            HEX = colorHexOrRGB.map((v,i,a)=> {
                v = Math.min(Math.abs(parseInt(v)),255);
                return parseInt(v,10) * Math.pow( 0x100, a.length - i - 1 ) || 0;
            }).reduce((a,p)=>a+p,0).toString(16);
        }else{
            HEX = colorHexOrRGB.replace("#","");
            if (HEX.length === 3) HEX = HEX.split('').map(i=>`${i}${i}`).join('');
        }        
        super(`#${HEX}`);
        this.numeric = parseInt(HEX,16);
  }
}

function createHybridColorString(s){
    return new HybridColorString(s)
}

module.exports = createHybridColorString;