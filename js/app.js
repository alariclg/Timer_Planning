
class Chrono{  
  constructor(name, duration){
    this.name = name;
    this.duration = Number(duration);
  }
}  

var app = new Vue({
  el: '#app',
  data: {
    chronos: [],
    passed:0,
    duration:0,
    id:0,
    chrono_time:0,
    passed_time:"00:00",
    duration_time:"00:00",
    inited:false,
    end:false,
    paused:true,
    started:false,
    currentChrono:false,
    dialog:{},
    player:{},
    interval:{},
    have_storage:false
  },
  mounted: function(){
    this.player = document.querySelector('#audio');
    var storage = JSON.parse(localStorage.getItem("Timer_Planning"));
    if(storage && storage.length >0){
      this.have_storage = true;
    }
  },
  methods:{
    openAddDialog:function(){
      add_dialog.openDialog();
    },
    closeAddDialog:function(){
      add_dialog.closeDialog();
    },
    openSaveDialog:function(){
      save_dialog.openDialog();
    },
    closeSaveDialog:function(){
      save_dialog.closeDialog();
    },
    openImportDialog:function(){
      import_dialog.openDialog();
    },
    closeImportDialog:function(){
      import_dialog.closeDialog();
    },
    addChrono: function (name,duration) {
      if(name !== "" && duration !== 0){
        this.closeAddDialog();
        let newChrono = new Chrono(name,duration);
        if(newChrono){
          this.chronos.push(newChrono);
          this.stop();
        }
      }
    },
    deleteChrono: function(index){
      this.chronos.splice(index, 1);
      this.stop();
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
      this.duration = 0;
      this.passed = 0;
      this.started = false;

      if(this.chronos.length > 0){
        this.inited = true;
        for(var i=0; i < this.chronos.length ; i++){
          this.duration = this.duration + this.chronos[i].duration;
        }
        this.currentChrono = this.chronos[0];
      }
      this.showCountDown(true);     
      
    },
    play: function(){
      if(this.end){
        this.end = false;
        this.stop();
      }
      if(!this.inited){
        this.init();
      }else{
        if(!this.started){
          this.id = 0;
          this.chrono_time = 0;
          this.currentChrono = this.chronos[this.id];   
          this.interval = setInterval(()=>{
            if(!this.paused && !this.end){
              this.passed++;
              this.chrono_time++; 
              if(this.chrono_time === this.currentChrono.duration){
                this.player.play();
                this.id++;
                if(this.id < this.chronos.length){
                   this.chrono_time = 0;
                   this.currentChrono = this.chronos[this.id];
                }else{
                   this.end = true;
                }
              }            
              this.showCountDown(false);
            }
          },1000);
         this.started = true;
      }
    }
    if(this.paused){
      this.paused = false;   
     }
    },
    pause_time: function(){
      this.paused = true;
    },
    stop: function(){
      clearTimeout(this.timeout);
      for(var i = 1; i < this.interval; i++){
         clearInterval(this.interval);
      }
      this.init();
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

