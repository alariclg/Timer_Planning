<audio id="audio" style="display:none" v-model="player" src="src/bip.mp3"></audio>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<div class="container">
  <div id="app" class="row">
    <div class="col-md-12">
      <h2>Chrono Planning V0.1</h2>
    </div>
    <div class="col-md-12">
      <ul class="list-group">
        <li v-for="chrono in chronos" v-bind:class="chrono.color" class="list-group-item">
          <span class="badge">{{chrono.duration}}</span>
          {{chrono.name}}
        </li>
      </ul>
    </div>
    <div class="col-md-12">
			<form class="">
			 <h3 v-if="currentChrono">{{currentChrono.name}} - {{currentChrono.duration}} secondes / {{time}} secondes </h3>
       <div class="progress">
          <div class="progress-bar" role="progressbar" v-bind:style="'width:'+ passed_percent +'%'" v-bind:aria-valuenow="passed_percent" aria-valuemin="0" aria-valuemax="100"></div>
       </div>
       <button type="button" v-on:click="play()" class="btn btn-success">Play</button>
       <button type="button" v-on:click="pause_time()" class="btn btn-warning">Pause</button>
       <button type="button" v-on:click="stop()" class="btn btn-danger">Stop</button>
			</form>
    </div>
		<div class="col-md-12">
      <form class="">
        <div class="form-group">
          <label class="sr-only" for="name">Nom du chrono</label>
          <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Nom du chrono">
        </div>
        <div class="form-group">
          <label class="sr-only" for="duration">Durée en seconde</label>
          <input type="number" v-model="form.duration" pattern="[0-9]"  class="form-control" id="duration" placeholder="Durée en seconde">
        </div>
        <div class="checkbox">
          <label>
            <input v-model="form.color" value="success" type="radio"> Green
          </label>
          <label>
            <input v-model="form.color" value="danger" type="radio"> Red
          </label>
          <label>
            <input v-model="form.color" value="info" type="radio"> Blue
          </label>          
          <label>
            <input v-model="form.color" value="warning" type="radio"> Orange
          </label>
        </div>
        <button type="button" v-on:click="addChrono(form.name,form.duration,form.color)" class="btn btn-default">Add a Step/Chrono</button>
      </form>
    </div>
  </div>
</div>

<script
			  src="https://code.jquery.com/jquery-3.2.1.min.js"
			  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
			  crossorigin="anonymous">
</script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="https://unpkg.com/vue"></script>
<script src="js/app.js"></script>
