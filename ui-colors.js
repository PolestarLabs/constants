//import {createHybridColorString as HCS} from "./HybridColorString";
const  HCS = require("./HybridColorString");
module.exports = {

  RarityColors : {
    C:  HCS("#928fa8"),
    U:  HCS("#63b361"),
    R:  HCS("#3646bf"),
    SR:  HCS("#8827ce"),
    UR:  HCS("#dc5c50"),
    XR:  HCS("#981f1f"),
  },
  
  Branding : {
    pink:     HCS("#FF5599"),
    grape:    HCS("#AA66FF"),
    purple:   HCS("#AA66FF"),
    purple2:  HCS("#5E38BD"),
    lilac:    HCS("#CC55FF"),
    yellow:   HCS("#F8B95F"),
    red:      HCS("#FC5065"),
    blue:     HCS("#5A90F5"),
    cyan:     HCS("#50CCFF"),
    white:    HCS("#EDEDFF"),
    green:    HCS("#2BE0AF"),
    green2:   HCS("#2BC080"),
    jade:     HCS("#2BA0AF"),
    softblack:HCS("#3A3A55"),
    black:    HCS("#1B1B2B"),  
    dark:     HCS("#2B2B3F"),
    
  },
  
  Misc : {
    salmon:  "#FF8580",
    orange:  "#FF8045",
    lime:    "#90F075",
  },

  Interface : {
    red:      HCS("#FC3050"),
    green:    Branding.green2,
    yellow:   Branding.yellow,
    blue:     Branding.blue,
    //aliases
    danger:   red,
    error:    red,
    warning:  yellow,
    success:  green,
    info:     blue,
    
    primary:    Branding.pink,
    secondary:  Branding.purple,
    
  }
}