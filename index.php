

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

	<title>Chrono Planning v1.0</title>
</head>
<body class="">
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<span class="mdl-layout-title">Chrono Planning v1.0</span>
			</div>
  	</header>
		<main id="app" class="mdl-layout__content">
			<div class="page-content">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--12-col">
						<ul class="mdl-list">
							<h4 class="mdl-cell mdl-cell--12-col"> Chronos </h4>
							<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
								<tbody>
									<tr>
										<td class="mdl-data-table__cell--non-numeric"><i class="material-icons  mdl-list__item-alarm">alarm</i></td>
										<td>pompes</td>
										<td>20 secondes</td>
									</tr>
								</tbody>
							</table>
						</ul>
					</div>
					<div class="mdl-cell mdl-cell--12-col mdl-cell_timer">
						<h3>00:00 / 00:00</h3> 
					</div>
					<div class="mdl-cell mdl-cell--12-col mdl-cell_action">
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
							<i class="material-icons">play_arrow</i>
						</button>
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
							<i class="material-icons">pause</i>
						</button>
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
							<i class="material-icons">stop</i>
						</button>
					</div>
					<div class="mdl-cell mdl-cell--12-col">
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button flt-right">
							<i class="material-icons">alarm_add</i>
						</button>
					</div>
				</div>
			</div>
		</main>
		<footer>
			<!-- 	Audio biper -->
			<audio id="audio" style="display:none" v-model="player" src="audio/bip.mp3"></audio>

			<!-- 	Material Design Lite version -->
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
			<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
			<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-light_blue.min.css" />
			<link rel="stylesheet" href="css/style.css" />
			<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

			<!-- 	VueJs & App -->
			<script src="https://unpkg.com/vue"></script>
			<script src="js/app.js"></script>
		</footer>
	</div>
</body>
<footer>

</footer>
</html>

