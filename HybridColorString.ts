class HybridColorString extends String {
    numeric: number;
    constructor(colorHexOrRGB: Array<number|string> | string) {
        let HEX = "000000";
        if (colorHexOrRGB instanceof Array){
            HEX = colorHexOrRGB.map((v,i,a)=> {
                //@ts-ignore
                v = Math.min(Math.abs(parseInt(v)),255);
                //@ts-ignore
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

function createHybridColorString(s: string | Array<number|string> ){
    return new HybridColorString(s)
}

export default  createHybridColorString;