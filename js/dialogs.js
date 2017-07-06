var add_dialog = new Vue({
  el: '#dialog-add',
  data: {
    form: {
      name: "",
      duration: 0,
    }
  },
  mounted: function() {
    this.dialog = document.querySelector('#dialog-add');
    if (!this.dialog.showModal) {
      dialogPolyfill.registerDialog(this.dialog);
    }
  },
  methods: {
    openDialog: function() {
      this.dialog.showModal();
    },
    closeDialog: function() {
      this.dialog.close();
    },
    addChrono: function(name, duration) {
      app.addChrono(name, duration);
    }
  }
})

var save_dialog = new Vue({
  el: '#dialog-save',
  data: {
    form: {
      name: "",
    }
  },
  mounted: function() {
    this.dialog = document.querySelector('#dialog-save');
    if (!this.dialog.showModal) {
      dialogPolyfill.registerDialog(this.dialog);
    }
  },
  methods: {
    openDialog: function() {
      this.dialog.showModal();
    },
    closeDialog: function() {
      this.dialog.close();
    },
    saveTimers: function(name) {
      var currentStorage = JSON.parse(localStorage.getItem("Timer_Planning"));
      var arr = {
        'date': this.getDate(),
        'name': name,
        'timers': app.chronos
      }
      if (!currentStorage) {
        currentStorage = [];
      }
      currentStorage.push(arr);
      localStorage.setItem("Timer_Planning", JSON.stringify(currentStorage));
      app.have_storage = true;
      app.init();
      this.closeDialog();
    },
    getDate: function() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      return dd + '/' + mm + '/' + yyyy;
    }
  }
})

var import_dialog = new Vue({
  el: '#dialog-import',
  data: {
    list: [],
    selected: {},
    selected_id: false
  },
  mounted: function() {
    this.dialog = document.querySelector('#dialog-import');
    if (!this.dialog.showModal) {
      dialogPolyfill.registerDialog(this.dialog);
    }
    var currentStorage = JSON.parse(localStorage.getItem("Timer_Planning"));
    if (currentStorage) {
      this.list = currentStorage;
    }
  },
  methods: {
    openDialog: function() {
      this.list = JSON.parse(localStorage.getItem("Timer_Planning"));
      this.dialog.showModal();
    },
    closeDialog: function() {
      this.dialog.close();
    },
    importTimers: function() {
      if (this.selected) {
        app.chronos = this.selected.timers;
        this.closeDialog();
      }
    },
    deleteTimers: function() {  
      if(this.selected_id >= 0) {
        var currentStorage = JSON.parse(localStorage.getItem("Timer_Planning"));
        currentStorage.splice(this.selected_id, 1);
        this.list = currentStorage;
        localStorage.setItem("Timer_Planning", JSON.stringify(currentStorage));
        if(currentStorage.length > 0){
          app.have_storage = true;
        }else{
          app.have_storage = false;
          this.closeDialog();
        }       
      }
    },
    select: function(item, index) {
      this.selected = item;
      this.selected_id = index;
      console.log(index);
    }
  }
})