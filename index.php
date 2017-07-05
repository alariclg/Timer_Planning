<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
	
	<!-- Add to homescreen for Chrome on Android -->
	<meta name="mobile-web-app-capable" content="yes">

	<!-- Add to homescreen for Safari on iOS -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="Material Design Lite">
  <link rel="stylesheet" type="text/css" href="css/dialog-polyfill.css" />
	<title>Timer Planning v1.0</title>
</head>
<body>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<i class="material-icons  mdl-list__item-alarm">alarm</i>
				<span class="mdl-layout-title">Timer Planning v1.0</span>
			</div>
  	</header>
		<main id="app" class="mdl-layout__content">
			<div class="page-content">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--12-col">
						<h4 class="mdl-cell mdl-cell--12-col"> Timers </h4>
						<table v-if="chronos.length > 0" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
							<tbody>
								<tr v-for="(chrono, index) in chronos">
									<td class="mdl-data-table__cell--non-numeric"><i class="material-icons  mdl-list__item-alarm">alarm</i></td>
									<td class="mdl-data-table__cell--non-numeric">{{chrono.name}}</td>
									<td class="mdl-data-table__cell--non-numeric">{{chrono.duration}} secondes</td>
									<td class="mdl-data-table__cell--non-numeric mdl-data-table-delete" v-on:click="deleteChrono(index)"><i class="material-icons  mdl-list__item-delete">delete</i></td>
								</tr>
							</tbody>
						</table>
						<p class="mdl-cell mdl-cell--12-col" v-else>
							Please add a Timer
						</p>
					</div>
					<div class="mdl-cell mdl-cell--12-col mdl-cell_timer">
						<h2 v-if="currentChrono">{{currentChrono.name}}</h2>
						<h3>{{duration_time}} / {{passed_time}}</h3> 
					</div>
					<div class="mdl-cell mdl-cell--12-col mdl-cell_action">
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" v-on:click="play()">
							<i class="material-icons">play_arrow</i>
						</button>
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" v-on:click="pause_time()">
							<i class="material-icons">pause</i>
						</button>
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" v-on:click="stop()">
							<i class="material-icons">stop</i>
						</button>
					</div>
					<div class="mdl-cell mdl-cell--12-col">
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button flt-right" v-on:click="openDialog()">
							<i class="material-icons">alarm_add</i>
						</button>
					</div>
				</div>
			</div>
			
		</main>
		<footer class="mdl-mini-footer">
			<div class="mdl-mini-footer__left-section">
				<ul class="mdl-mini-footer__link-list">
					<li><a href="http://a-legrais.fr">Alaric LEGRAIS</a></li>
					<li><a href="https://github.com/shadow140/"> MIT License</a></li>
				</ul>
			</div>
		</footer>	
	</div>
	
	<dialog id="dialog" class="mdl-dialog">
		<div class="mdl-dialog__content">
			<h3>
				New timer
			</h3>
		</div>
		<form action="#">
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" v-model="form.name" type="text" id="sample3">
				<label class="mdl-textfield__label" for="sample3">Name</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" v-model="form.duration" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4">
				<label class="mdl-textfield__label" for="sample4">Duration in secondes</label>
				<span class="mdl-textfield__error">Please enter numbers...</span>
			</div>
		</form>
		<div class="mdl-dialog__actions mdl-dialog__actions--full-width">
			<button type="button" v-on:click="addChrono(form.name,form.duration)" class="mdl-button">Add timer</button>
			<button type="button" v-on:click="closeDialog()" class="mdl-button">Cancel</button>
		</div>
	</dialog>
	
	<!-- 	Audio biper -->
	<audio id="audio" style="display:none" v-model="player" src="audio/bip.wav"></audio>

	<!-- 	Material Design Lite version -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
	<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-light_blue.min.css" />
	<link rel="stylesheet" href="css/style.css" />
	

	<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
	<script src="js/dialog-polyfill.js"></script>
	
	<!-- 	VueJs & App -->
	<script src="js/vue.js"></script>
	<script src="js/app.js"></script>
</body>
</html>

