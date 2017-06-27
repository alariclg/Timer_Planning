
class Chrono{  
  constructor(name, duration, color){
    this.key = name + "-" + Math.random(0,100);
    this.name = name;
    this.duration = Number(duration);
    this.color = "list-group-item-"+color;
  }
}  

var app = new Vue({
  el: '#app',
  data: {
    repeat:false,
    chronos: [],
    form:{
      name:"",
      duration:0,
      color:""
    },
    message:"steps",
    duration:0,
    passed_time:0,
    passed_percent:0,
    inited:false,
    pause:false,
    currentChrono:false,
    currentId:0,
    player:{},
    timeout:{},
    interval:{}
  },
  mounted: function(){
    this.player = document.querySelector('#audio');
  },
  methods:{
    addChrono: function (name,duration,color = "success") {
      let newChrono = new Chrono(name,duration,color);
      if(newChrono){
        this.chronos.push(newChrono);
      }

    },
    deleteChrono: function(key){
      delete this.chronos[key];
    },
    updateChrono: function(key, name = false ,duration = false,color = false){
      if(name){
        this.chronos[key].name = name;
      } 
      if(duration){
        this.chronos[key].duration = Number(duration);
      }
      if(color){
        this.chronos[key].color = color;
      }
    },
    init: function(){
      this.currentChrono = this.chronos[0];
      this.duration = 0
      for(var i=0; i < this.chronos.length ; i++){
        this.duration = this.duration + this.chronos[i].duration;
      }
      this.passed_time = this.duration;
      this.timeout = setInterval(()=>{
        if(!this.paused){
          this.passed_time = this.passed_time - 1
        }
      },1000);
      this.next(0);
    },
    play: function(){
      if(!this.inited){
        this.init();
      }else{
        this.inited = true;
      }
    },
    pause_time: function(){
      this.paused = true;
    },
    stop: function(){
      clearInterval(this.interval);
      clearInterval(this.timeout);
      this.init();
    },
    next: function(id){
      this.currentChrono = this.chronos[id];
      this.interval = setTimeout(()=>{ 
        if(!this.paused){
          this.player.play();
          if(this.chronos[id+1]){
            this.next(id+1);
            this.currentId++;
          }
        }
      }, this.chronos[id].duration*1000);
    }
  }
})