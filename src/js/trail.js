import {hMap, dMap} from "./map.js";
import { GroundObject} from "./GameObjects/gameObject.js";
import { Virus } from "./GameObjects/virus.js";
import { Toiletpaper } from "./GameObjects/toiletPaper.js";
import { Neighbour } from "./GameObjects/neigbour.js";
import { OldWhiteMan } from "./GameObjects/oldWhiteMan.js";
import {CONSTANTS} from "./constants.js";
import { Mask } from "./GameObjects/mask.js";

export class Trail {
    constructor(mode){
        if(mode=="h"){
            this.map = hMap;
        } else {
            this.map =dMap;
        }
        this.trail = [];
        this.setupMap();
    }


    setupMap(){
        for(let i = 0; i<this.map.length; i++){
            let reihe = this.map[i];
            let inArray = [];
            this.trail.push(inArray);
            for(let r = 0; r< reihe.length; r++){
                let symbol = reihe[r];
                let x = i*30;
                let y = 400-((r+1)*30);
                switch (symbol){
                    case "_":
                        break;
                    case "1":
                        inArray.push(new GroundObject(x, y, CONSTANTS.groundwidth,
                            CONSTANTS.groundColor,CONSTANTS.speedTrailX, 0));
                        break;
                    case "2":
                        inArray.push(new Mask(x,y,CONSTANTS.maskWidth, CONSTANTS.maskHeight,
                            CONSTANTS.maskColor,CONSTANTS.speedTrailX,0));
                        break;
                    case "3":
                        inArray.push(new Toiletpaper(x,y, CONSTANTS.TPradius,
                            CONSTANTS.speedTrailX, 0));
                        break;
                    case "4":
                        inArray.push(new Virus(x,y, CONSTANTS.Vradius, CONSTANTS.VouterColor,
                            CONSTANTS.VinnerColor,CONSTANTS.speedTrailX, 0));
                        break;
                    case "5":
                        inArray.push(new OldWhiteMan(x,y,CONSTANTS.OWMradius,
                            CONSTANTS.OWMfaceColor ,CONSTANTS.speedTrailX, 0));
                        break;
                    case "6":
                        inArray.push(new Neighbour(x,y,CONSTANTS.NBradius,
                            CONSTANTS.NBfaceColor, CONSTANTS.speedTrailX, 0));
                }
            }
        }
        return this.trail;
    }
}
