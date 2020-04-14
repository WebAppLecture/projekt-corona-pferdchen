this.trail = [];
        /*let obMap = new Map([
            ["1", ["green", 50]], //Bodenteil - einfaches GameObject
            ["2",["#66FFCC", 30]], //Maske

            ["3",["#E0E0E0", 50]], //Klopapier - RUND!
            ["4",["#80FF00", 50]], //Virus - RUND!

            ["5",["white", 40]], //alter weisser Mann..?
        ]);*/
        for(let i = 0; i<trailmap.length; i++){
            let reihe = trailmap[i];
            
            for(let r = 0; r< reihe.length-1; r++){
                let symbol = reihe[r];
                if(symbol==="_"){
                    continue;
                }
                /*if(symbol==="3"){
                    this.tp = new RoundObject(100,100, 20, "#E0E0E0");
                    
                }            */
                this.symbol = symbol;
                console.log(this.symbol);
                let x = i*50;
                let y = 400-((r+1)*40);
                switch (this.symbol){
                    case "1":
                        this.drawGround(x,y);
                        break;
                    case "2":
                        this.drawMask(x,y);
                        break;
                    case "3":
                        this.drawToiletPaper(x,y);
                        break;
                    case "4":
                        this.drawVirus(x,y);
                        break;
                }
                //this.mapCodes[symbol];
               /* let piece = obMap.get(symbol);
                let piececolor = piece[0];                
                let pieceheight = piece[1];
                this.trail.push(new GameObject(i*50,(400-(r*40)),50, pieceheight, piececolor ,-1,0));*/
                
            }
        }
       /* 
        
    }
    get mapCodes(x,y){
        return {
            "1": () => this.drawGround(x,y), //liste - neues Objekt mit x/y-Koordinate hinzufügen
            "2": () => this.drawMask(x,y),
            "3": () => this.drawKlopapier(x,y),
            "4": () => this.drawVirus(x,y),
        }*/