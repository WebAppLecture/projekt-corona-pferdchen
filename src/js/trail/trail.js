import {hMap, dMap} from "./map.js";
import { GroundObject} from "../GameObjects/gameObject.js";
import { Virus } from "../GameObjects/virus.js";
import { Toiletpaper } from "../GameObjects/toiletPaper.js";
import { Neighbour } from "../GameObjects/neigbour.js";
import { OldWhiteMan } from "../GameObjects/oldWhiteMan.js";
import { Mask } from "../GameObjects/mask.js";
import Config from "../config.js";

export class Trail {
    constructor(mode){
        if(mode){
            this.map = hMap;
            this.groundColor=Config.H_GROUND_COLOR;
        } else {
            this.map =dMap;
            this.groundColor=Config.D_GROUND_COLOR;
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
                        inArray.push(new GroundObject(x, y, Config.GROUND_WIDTH,
                            this.groundColor,Config.SPEED_TRAILX));
                        break;
                    case "2":
                        inArray.push(new Mask(x,y,Config.MASK_WIDTH, Config.MASK_HEIGHT,
                            Config.MASK_COLOR,Config.SPEED_TRAILX));
                        break;
                    case "3":
                        inArray.push(new Toiletpaper(x,y,Config.TP_RADIUS, 
                            Config.SPEED_TRAILX));
                        break;
                    case "4":
                        inArray.push(new Virus(x,y, Config.V_RADIUS, Config.V_OUTER_COLOR,
                            Config.V_INNER_COLOR,Config.SPEED_TRAILX));
                        break;
                    case "5":
                        inArray.push(new OldWhiteMan(x,y,Config.OWM_RADIUS,
                            Config.OWM_FACE_COLOR ,Config.SPEED_TRAILX));
                        break;
                    case "6":
                        inArray.push(new Neighbour(x,y,Config.NB_RADIUS,
                            Config.NB_FACE_COLOR, Config.SPEED_TRAILX));
                }
            }
        }
        return this.trail;
    }
}
