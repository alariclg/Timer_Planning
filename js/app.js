
class Chrono{  
  constructor(name, duration){
    this.name = name;
    this.duration = Number(duration);
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
    },
    message:"steps",
    passed:0,
    duration:0,
    passed_time:"00:00",
    duration_time:"00:00",
    inited:false,
    pause:false,
    finished:false,
    currentChrono:false,
    currentId:0,
    dialog:{},
    player:{},
    timeout:{},
    interval:{}
  },
  mounted: function(){
    this.player = document.querySelector('#audio');
    this.dialog = document.querySelector('dialog');
    if (! this.dialog.showModal) {
      dialogPolyfill.registerDialog(this.dialog);
    }
  },
  methods:{
    openDialog:function(){
      this.dialog.showModal();
    },
    closeDialog:function(){
      this.dialog.close();
    },
    addChrono: function (name,duration) {
      if(name !== "" && duration !== 0){
        this.closeDialog();
        let newChrono = new Chrono(name,duration);
        if(newChrono){
          this.chronos.push(newChrono);
        }
      }
    },
    deleteChrono: function(index){
      this.chronos.splice(index, 1);
    },
    updateChrono: function(index, name = false, duration = false){
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
      if(this.chronos.length > 0){
        this.inited = true;
        this.duration = 0;
        this.passed = 0;
        for(var i=0; i < this.chronos.length ; i++){
          this.duration = this.duration + this.chronos[i].duration;
        }
        this.currentChrono = this.chronos[0];
        this.showCountDown(true);
        
        this.interval = setInterval(()=>{
          if(!this.paused && !this.finished){
            this.passed++;
            this.showCountDown(false);
          }
        },1000);
        
        this.next(0); 
      }
    },
    play: function(){
      if(!this.inited){
        this.init();
      }
      this.paused = false;
    },
    pause_time: function(){
      this.paused = true;
    },
    stop: function(){
      this.paused = true;
      clearTimeout(this.timeout);
      for(var i = 1; i < this.interval; i++){
         clearInterval(this.interval);
      }
      this.init();
    },
    next: function(id){
      this.currentChrono = this.chronos[id];
      this.timeout = setTimeout(()=>{ 
        if(!this.paused){
          this.player.play();
          if(this.chronos[id+1]){
            this.next(id+1);
            this.currentId++;
          }else{
            this.finished = true;
          }
        }
      }, this.chronos[id].duration*1000);
    },
    showCountDown:function(init){
      if(init){
       var duration_minutes = Math.floor(this.duration / 60);
       var duration_secondes = 0;
        
       if(duration_minutes === 0){
         duration_secondes = this.duration;
       }else{
         duration_secondes = this.duration % 60;
       }
        
       this.duration_time = (duration_minutes >= 10 ? duration_minutes : "0" + duration_minutes) + ":" +(duration_secondes >= 10 ? duration_secondes : "0" + duration_secondes);
      }
      
      var passed_minutes = Math.floor(this.passed / 60);
      var passed_secondes = 0;
      
       if(passed_minutes === 0){
         passed_secondes = this.passed;
       }else{
         passed_secondes = this.passed % 60;
       }
      
      this.passed_time = (passed_minutes >= 10 ? passed_minutes : "0" + passed_minutes) + ":" +(passed_secondes >= 10 ? passed_secondes : "0" + passed_secondes);
      
    }
  }
})