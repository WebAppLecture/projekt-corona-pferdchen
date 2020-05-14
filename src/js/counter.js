export class Counter {
    constructor(mode, countList){
        this.count = 0;
        this.mode = mode;
        this.countList = countList;
    }

    countUp(){
        if(this.count<5){ 
            let tp = this.countList.children[this.count];
            tp.classList.add("taken");
            this.count++;
        }
    }

    countDown(){
        if(this.count>0){
            this.count--;
            let tp = this.countList.children[this.count];
            tp.classList.remove("taken");
        }
    }
}