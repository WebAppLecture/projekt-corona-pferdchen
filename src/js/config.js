
const Config = {
    SPEED_TRAILX: -1.3,
    NEW_SCREEN:"#bbb",
    WON_HEALTH: ["Juhu!", "Thank you for", "the toiletpaper!","", "click to", "play again"],
    WON_DARK: ["Yey.","You won by infecting", "many innocent People","...","click to", "play again"],
    GAME_OVER_TEXT: ["Game Over", "", "click to", "play again"],
    TEXT_COLOR: "#000",
    
    //Player
    GRAVITY_Y: 0.3,
    JUMP_Y: -9,
    PLAYER_X: 200,
    PLAYER_Y: 220,
    PLAYER_COLOR: "#a77",
    PLAYER_WIDTH: 30,
    PLAYER_MOVE_X: 0,
    PLAYER_MOVE_Y: 0,
    PLAYER_FASTER: 0.1,
    
    //Groundobject
    H_GROUND_COLOR: "green",
    D_GROUND_COLOR: "#111",
    GROUND_WIDTH: 31,
    
    //Mask
    MASK_COLOR: "#66FFCC",
    MASK_WIDTH: 30,
    MASK_HEIGHT: 20,
    MASK_TIME: 3000,
    
    //Toiletpaper
    TP_MAX: 5,
    TP_RADIUS: 20,
    TP_INNER_COLOR: "#bbb",
    TP_OUTER_COLOR: "#eee",
    TP_LINE_COLOR: "#ddd",
    
    //OldWhiteMan
    OWM_FACE_COLOR: "#fac34d",
    OWM_I_FACE: "#acab",
    OWM_HAIR_COLOR: "#f0ecd1",
    EYE_COLOR: "black",
    OWM_RADIUS: 20,
    
    //Virus
    V_RADIUS: 15,
    V_INNER_COLOR: "#80FF00",
    V_OUTER_COLOR: "red",
    V_SHADOW_COLOR: "yellow",
    
    //Neighbour
    NB_FACE_COLOR: "#ffd6e7",
    NB_I_FACE: "#7d9",
    NB_HAIR_COLOR: "#eee",
    NB_RADIUS: 25,

};



Object.freeze(Config);

export default Config;