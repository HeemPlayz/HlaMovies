// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname);

// http://expressjs.com/en/starter/basic-routing.html
//app.get('/', function(request, response) {
 // response.render(__dirname + '/views/index.ejs');
//});

app.get('/', (req, res) => {
	res.render('views/index.ejs');
});
/*
app.get('/series', (req, res) => {
	res.render('views/series.ejs');
});

app.get('/a_simple_favor', (req, res) => {
	res.render('views/a_simple_favor.ejs');
});

app.get('/movies_2', (req, res) => {
	res.render('views/movies_2.ejs');
});

app.get('/jigsaw', (req, res) => {
	res.render('views/jigsaw.ejs');
});

app.get('/lost', function(request, response) {
  response.sendFile(__dirname + '/views/lost.html');
});

//app.get('/hellboy', function(request, response) {
 // response.sendFile(__dirname + '/views/hellboy.html');
//});

app.get('/hellboy', (req, res) => {
	res.render('views/hellboy.ejs');
});

app.get('/ghost_light', (req, res) => {
	res.render('views/ghost_light.ejs');
});

//app.get('/men_in_black_international', function(request, response) {
 // response.sendFile(__dirname + '/views/mib.html');
//});

app.get('/men_in_black_international', (req, res) => {
	res.render('views/mib.ejs');
});

//app.get('/pokemon_detective_pikachu', function(request, response) {
 // response.sendFile(__dirname + '/views/pokemon_detective_pikacu.html');
//});

app.get('/pokemon_detective_pikachu', (req, res) => {
	res.render('views/pokemon_detective_pikacu.ejs');
});

//app.get('/ophelia', function(request, response) {
 // response.sendFile(__dirname + '/views/ophelia.html');
//});

app.get('/ophelia', (req, res) => {
	res.render('views/ophelia.ejs');
});

app.get('/how_to_train_your_dragon_3', (req, res) => {
	res.render('views/how_to_train_your_dragon_3.ejs');
});



//app.get('/john_wick_chapter_3_parabellum', function(request, response) {
  //response.sendFile(__dirname + '/views/john_wick_chapter_3.html');
//});

app.get('/john_wick_chapter_3_parabellum', (req, res) => {
	res.render('views/john_wick_chapter_3.ejs');
});

//app.get('/action', function(request, response) {
 // response.sendFile(__dirname + '/views/action_movies.html');
//});

app.get('/action_movies', (req, res) => {
	res.render('views/action_movies.ejs');
});

app.get('/it', (req, res) => {
	res.render('views/it.ejs');
});

app.get('/jumanji_welcome_to_the_jungle', (req, res) => {
	res.render('views/jumanji_welcome_to_the_jungle.ejs');
});

app.get('/captain_america_civil_war', (req, res) => {
	res.render('views/captain_america_civil_war.ejs');
});

app.get(`/dont_breathe`, (req, res) => {
	res.render(`views/dont_breathe.ejs`);
});

app.get(`/sherlock_holmes_a_game_of_shadows`, (req, res) => {
	res.render(`views/sherlock_holmes_a_game_of_shadows.ejs`);
});

app.get(`/happy_death_day_2u`, (req, res) => {
	res.render(`views/happy_death_day_2u.ejs`);
});

app.get(`/game_of_thrones`, (req, res) => {
	res.render(`views/game_of_thrones.ejs`);
});

app.get(`/game_of_thrones_s1_ep1`, (req, res) => {
	res.render(`views/game_of_thrones_s1_ep1.ejs`);
});

app.get(`/game_of_thrones_the_movie`, (req, res) => {
	res.render(`views/game_of_thrones_the_movie.ejs`);
});

app.get('/m', function(request, response) {
	 response.sendFile(__dirname + '/views/below.html');
   });

app.get('/la_casa_de_papel', (req, res) => {
	res.render('views/la_casa_de_papel.ejs');
});

app.get('/game_of_thrones_s1_ep1', (req, res) => {
	res.render('views/game_of_thrones_s1_ep1.ejs');
});

app.get('/game_of_thrones_s1_ep1', (req, res) => {
	res.render('views/game_of_thrones_s1_ep1.ejs');
});

app.get('/game_of_thrones_s1_ep2', (req, res) => {
	res.render('views/game_of_thrones_s1_ep2.ejs');
});

app.get('/game_of_thrones_s1_ep3', (req, res) => {
	res.render('views/game_of_thrones_s1_ep3.ejs');
});

app.get('/game_of_thrones_s1_ep4', (req, res) => {
	res.render('views/game_of_thrones_s1_ep4.ejs');
});

app.get('/game_of_thrones_s1_ep5', (req, res) => {
	res.render('views/game_of_thrones_s1_ep5.ejs');
});

app.get('/game_of_thrones_s1_ep6', (req, res) => {
	res.render('views/game_of_thrones_s1_ep6.ejs');
});

app.get('/game_of_thrones_s1_ep7', (req, res) => {
	res.render('views/game_of_thrones_s1_ep7.ejs');
});

app.get('/game_of_thrones_s1_ep8', (req, res) => {
	res.render('views/game_of_thrones_s1_ep8.ejs');
});

app.get('/game_of_thrones_s1_ep9', (req, res) => {
	res.render('views/game_of_thrones_s1_ep9.ejs');
});

app.get('/game_of_thrones_s1_ep10', (req, res) => {
	res.render('views/game_of_thrones_s1_ep10.ejs');
});

app.get('/game_of_thrones_s2_ep1', (req, res) => {
	res.render('views/game_of_thrones_s2_ep1.ejs');
});

app.get('/game_of_thrones_s2_ep2', (req, res) => {
	res.render('views/game_of_thrones_s2_ep2.ejs');
});

app.get('/game_of_thrones_s2_ep3', (req, res) => {
	res.render('views/game_of_thrones_s2_ep3.ejs');
});

app.get('/game_of_thrones_s2_ep4', (req, res) => {
	res.render('views/game_of_thrones_s2_ep4.ejs');
});

app.get('/game_of_thrones_s2_ep5', (req, res) => {
	res.render('views/game_of_thrones_s2_ep5.ejs');
});

app.get('/game_of_thrones_s2_ep6', (req, res) => {
	res.render('views/game_of_thrones_s2_ep6.ejs');
});

app.get('/game_of_thrones_s2_ep7', (req, res) => {
	res.render('views/game_of_thrones_s2_ep7.ejs');
});

app.get('/game_of_thrones_s2_ep8', (req, res) => {
	res.render('views/game_of_thrones_s2_ep8.ejs');
});

app.get('/game_of_thrones_s2_ep9', (req, res) => {
	res.render('views/game_of_thrones_s2_ep9.ejs');
});

app.get('/game_of_thrones_s2_ep10', (req, res) => {
	res.render('views/game_of_thrones_s2_ep10.ejs');
});

app.get('/game_of_thrones_s3_ep1', (req, res) => {
	res.render('views/game_of_thrones_s3_ep1.ejs');
});

app.get('/game_of_thrones_s3_ep2', (req, res) => {
	res.render('views/game_of_thrones_s3_ep2.ejs');
});

app.get('/game_of_thrones_s3_ep3', (req, res) => {
	res.render('views/game_of_thrones_s3_ep3.ejs');
});

app.get('/game_of_thrones_s3_ep4', (req, res) => {
	res.render('views/game_of_thrones_s3_ep4.ejs');
});

app.get('/game_of_thrones_s3_ep5', (req, res) => {
	res.render('views/game_of_thrones_s3_ep5.ejs');
});

app.get('/game_of_thrones_s3_ep6', (req, res) => {
	res.render('views/game_of_thrones_s3_ep6.ejs');
});

app.get('/game_of_thrones_s3_ep7', (req, res) => {
	res.render('views/game_of_thrones_s3_ep7.ejs');
});

app.get('/game_of_thrones_s3_ep8', (req, res) => {
	res.render('views/game_of_thrones_s3_ep8.ejs');
});

app.get('/game_of_thrones_s3_ep9', (req, res) => {
	res.render('views/game_of_thrones_s3_ep9.ejs');
});

app.get('/game_of_thrones_s3_ep10', (req, res) => {
	res.render('views/game_of_thrones_s3_ep10.ejs');
});

app.get('/game_of_thrones_s4_ep1', (req, res) => {
	res.render('views/game_of_thrones_s4_ep1.ejs');
});

app.get('/game_of_thrones_s4_ep2', (req, res) => {
	res.render('views/game_of_thrones_s4_ep2.ejs');
});

app.get('/game_of_thrones_s4_ep3', (req, res) => {
	res.render('views/game_of_thrones_s4_ep3.ejs');
});

app.get('/game_of_thrones_s4_ep4', (req, res) => {
	res.render('views/game_of_thrones_s4_ep4.ejs');
});

app.get('/game_of_thrones_s4_ep5', (req, res) => {
	res.render('views/game_of_thrones_s4_ep5.ejs');
});

app.get('/game_of_thrones_s4_ep6', (req, res) => {
	res.render('views/game_of_thrones_s4_ep6.ejs');
});

app.get('/game_of_thrones_s4_ep7', (req, res) => {
	res.render('views/game_of_thrones_s4_ep7.ejs');
});

app.get('/game_of_thrones_s4_ep8', (req, res) => {
	res.render('views/game_of_thrones_s4_ep8.ejs');
});

app.get('/game_of_thrones_s4_ep9', (req, res) => {
	res.render('views/game_of_thrones_s4_ep9.ejs');
});

app.get('/game_of_thrones_s4_ep10', (req, res) => {
	res.render('views/game_of_thrones_s4_ep10.ejs');
});


app.get('/la_casa_de_papel_s1_ep2', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep2.ejs');
});

app.get('/the_upside', (req, res) => {
	res.render('views/the_upside.ejs');
});

app.get('/rim_of_the_world', (req, res) => {
	res.render('views/rim_of_the_world.ejs');
});

app.get('/fighting_with_my_family', (req, res) => {
	res.render('views/fighting_with_my_family.ejs');
});

app.get('/la_casa_de_papel_s1_ep3', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep3.ejs');
});

app.get('/la_casa_de_papel_s1_ep4', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep4.ejs');
});

app.get('/venom', (req, res) => {
	res.render('views/venom.ejs');
});

app.get('/bird_box', (req, res) => {
	res.render('views/bird_box.ejs');
});

app.get('/la_casa_de_papel_s1_ep5', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep5.ejs');
});

app.get('/la_casa_de_papel_s1_ep6', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep6.ejs');
});

app.get('/la_casa_de_papel_s1_ep7', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep7.ejs');
});

app.get('/la_casa_de_papel_s1_ep8', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep8.ejs');
});

app.get('/la_casa_de_papel_s1_ep9', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep9.ejs');
});

app.get('/la_casa_de_papel_s1_ep10', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep10.ejs');
});

app.get('/la_casa_de_papel_s1_ep11', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep11.ejs');
});

app.get('/la_casa_de_papel_s1_ep12', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep12.ejs');
});

app.get('/la_casa_de_papel_s1_ep13', (req, res) => {
	res.render('views/la_casa_de_papel_s1_ep13.ejs');
});

app.get('/la_casa_de_papel_s2_ep1', (req, res) => {
	res.render('views/la_casa_de_papel_s2_ep1.ejs');
});

app.get('/la_casa_de_papel_s2_ep2', (req, res) => {
	res.render('views/la_casa_de_papel_s2_ep2.ejs');
});

app.get('/la_casa_de_papel_s2_ep3', (req, res) => {
	res.render('views/la_casa_de_papel_s2_ep3.ejs');
});

app.get('/la_casa_de_papel_s2_ep4', (req, res) => {
	res.render('views/la_casa_de_papel_s2_ep4.ejs');
});

app.get('/la_casa_de_papel_s2_ep5', (req, res) => {
	res.render('views/la_casa_de_papel_s2_ep5.ejs');
});

app.get('/la_casa_de_papel_s2_ep6', (req, res) => {
	res.render('views/la_casa_de_papel_s2_ep6.ejs');
});

app.get('/la_casa_de_papel_s3_ep1', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep1.ejs');
});

app.get('/la_casa_de_papel_s3_ep2', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep2.ejs');
});

app.get('/la_casa_de_papel_s3_ep3', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep3.ejs');
});

app.get('/la_casa_de_papel_s3_ep4', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep4.ejs');
});

app.get('/la_casa_de_papel_s3_ep5', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep5.ejs');
});

app.get('/la_casa_de_papel_s3_ep6', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep6.ejs');
});

app.get('/la_casa_de_papel_s3_ep7', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep7.ejs');
});

app.get('/la_casa_de_papel_s3_ep8', (req, res) => {
	res.render('views/la_casa_de_papel_s3_ep8.ejs');
});

//la_casa_de_papel_s1_ep1

app.get('/stranger_things_s1_ep1', (req, res) => {
	res.render('views/stranger_things_s1_ep1.ejs');
});

app.get('/stranger_things_s1_ep2', (req, res) => {
	res.render('views/stranger_things_s1_ep2.ejs');
});

app.get('/stranger_things_s1_ep3', (req, res) => {
	res.render('views/stranger_things_s1_ep3.ejs');
});

app.get('/stranger_things_s1_ep4', (req, res) => {
	res.render('views/stranger_things_s1_ep4.ejs');
});

app.get('/stranger_things_s1_ep5', (req, res) => {
	res.render('views/stranger_things_s1_ep5.ejs');
});

app.get('/stranger_things_s1_ep6', (req, res) => {
	res.render('views/stranger_things_s1_ep6.ejs');
});

app.get('/stranger_things_s1_ep7', (req, res) => {
	res.render('views/stranger_things_s1_ep7.ejs');
});

app.get('/stranger_things_s1_ep8', (req, res) => {
	res.render('views/stranger_things_s1_ep8.ejs');
});

app.get('/stranger_things_s2_ep1', (req, res) => {
	res.render('views/stranger_things_s2_ep1.ejs');
});

app.get('/stranger_things_s2_ep2', (req, res) => {
	res.render('views/stranger_things_s2_ep2.ejs');
});

app.get('/stranger_things_s2_ep3', (req, res) => {
	res.render('views/stranger_things_s2_ep3.ejs');
});

app.get('/stranger_things_s2_ep4', (req, res) => {
	res.render('views/stranger_things_s2_ep4.ejs');
});

app.get('/stranger_things_s2_ep5', (req, res) => {
	res.render('views/stranger_things_s2_ep5.ejs');
});

app.get('/stranger_things_s2_ep6', (req, res) => {
	res.render('views/stranger_things_s2_ep6.ejs');
});

app.get('/stranger_things_s2_ep7', (req, res) => {
	res.render('views/stranger_things_s2_ep7.ejs');
});

app.get('/stranger_things_s2_ep8', (req, res) => {
	res.render('views/stranger_things_s2_ep8.ejs');
});

app.get('/stranger_things_s2_ep9', (req, res) => {
	res.render('views/stranger_things_s2_ep9.ejs');
});

app.get('/stranger_things_s3_ep1', (req, res) => {
	res.render('views/stranger_things_s3_ep1.ejs');
});

app.get('/stranger_things_s3_ep2', (req, res) => {
	res.render('views/stranger_things_s3_ep2.ejs');
});

app.get('/stranger_things_s3_ep3', (req, res) => {
	res.render('views/stranger_things_s3_ep3.ejs');
});

app.get('/stranger_things_s3_ep4', (req, res) => {
	res.render('views/stranger_things_s3_ep4.ejs');
});

app.get('/stranger_things_s3_ep5', (req, res) => {
	res.render('views/stranger_things_s3_ep5.ejs');
});

app.get('/stranger_things_s3_ep6', (req, res) => {
	res.render('views/stranger_things_s3_ep6.ejs');
});

app.get('/stranger_things_s3_ep7', (req, res) => {
	res.render('views/stranger_things_s3_ep7.ejs');
});

app.get('/stranger_things_s3_ep8', (req, res) => {
	res.render('views/stranger_things_s3_ep8.ejs');
});

app.get('/peaky_blinders_s1_ep1', (req, res) => {
	res.render('views/peaky_blinders_s1_ep1.ejs');
});

app.get('/peaky_blinders_s1_ep2', (req, res) => {
	res.render('views/peaky_blinders_s1_ep2.ejs');
});

app.get('/peaky_blinders_s1_ep3', (req, res) => {
	res.render('views/peaky_blinders_s1_ep3.ejs');
});

app.get('/peaky_blinders_s1_ep4', (req, res) => {
	res.render('views/peaky_blinders_s1_ep4.ejs');
});

app.get('/peaky_blinders_s1_ep5', (req, res) => {
	res.render('views/peaky_blinders_s1_ep5.ejs');
});

app.get('/peaky_blinders_s1_ep6', (req, res) => {
	res.render('views/peaky_blinders_s1_ep6.ejs');
});

app.get('/peaky_blinders_s2_ep1', (req, res) => {
	res.render('views/peaky_blinders_s2_ep1.ejs');
});

app.get('/peaky_blinders_s2_ep2', (req, res) => {
	res.render('views/peaky_blinders_s2_ep2.ejs');
});

app.get('/peaky_blinders_s2_ep3', (req, res) => {
	res.render('views/peaky_blinders_s2_ep3.ejs');
});

app.get('/peaky_blinders_s2_ep4', (req, res) => {
	res.render('views/peaky_blinders_s2_ep4.ejs');
});

app.get('/peaky_blinders_s2_ep5', (req, res) => {
	res.render('views/peaky_blinders_s2_ep5.ejs');
});

app.get('/peaky_blinders_s2_ep6', (req, res) => {
	res.render('views/peaky_blinders_s2_ep6.ejs');
});

app.get('/peaky_blinders_s3_ep1', (req, res) => {
	res.render('views/peaky_blinders_s3_ep1.ejs');
});

app.get('/peaky_blinders_s3_ep2', (req, res) => {
	res.render('views/peaky_blinders_s3_ep2.ejs');
});

app.get('/peaky_blinders_s3_ep3', (req, res) => {
	res.render('views/peaky_blinders_s3_ep3.ejs');
});

app.get('/peaky_blinders_s3_ep4', (req, res) => {
	res.render('views/peaky_blinders_s3_ep4.ejs');
});

app.get('/peaky_blinders_s3_ep5', (req, res) => {
	res.render('views/peaky_blinders_s3_ep5.ejs');
});

app.get('/peaky_blinders_s3_ep6', (req, res) => {
	res.render('views/peaky_blinders_s3_ep6.ejs');
});

app.get('/peaky_blinders_s4_ep1', (req, res) => {
	res.render('views/peaky_blinders_s4_ep1.ejs');
});

app.get('/peaky_blinders_s4_ep2', (req, res) => {
	res.render('views/peaky_blinders_s4_ep2.ejs');
});

app.get('/peaky_blinders_s4_ep3', (req, res) => {
	res.render('views/peaky_blinders_s4_ep3.ejs');
});

app.get('/peaky_blinders_s4_ep4', (req, res) => {
	res.render('views/peaky_blinders_s4_ep4.ejs');
});

app.get('/peaky_blinders_s4_ep5', (req, res) => {
	res.render('views/peaky_blinders_s2_ep5.ejs');
});

app.get('/peaky_blinders_s4_ep6', (req, res) => {
	res.render('views/peaky_blinders_s4_ep6.ejs');
});

app.get('/peaky_blinders_s5_ep1', (req, res) => {
	res.render('views/peaky_blinders_s5_ep1.ejs');
});

app.get('/peaky_blinders_s5_ep2', (req, res) => {
	res.render('views/peaky_blinders_s5_ep2.ejs');
});

app.get('/peaky_blinders_s5_ep3', (req, res) => {
	res.render('views/peaky_blinders_s5_ep3.ejs');
});

app.get('/peaky_blinders_s5_ep4', (req, res) => {
	res.render('views/peaky_blinders_s5_ep4.ejs');
});

app.get('/peaky_blinders_s5_ep5', (req, res) => {
	res.render('views/peaky_blinders_s5_ep5.ejs');
});

app.get('/peaky_blinders_s5_ep6', (req, res) => {
	res.render('views/peaky_blinders_s5_ep6.ejs');
});


app.get('/fast_color', (req, res) => {
	res.render('views/fast_color.ejs');
});

app.get('/action', (req, res) => {
	res.render('views/action_movies.ejs');
});

app.get('/nady_al_regal_al_seri', (req, res) => {
	res.render('views/nady_al_regal_al_seri.ejs');
});

app.get('/clown', (req, res) => {
	res.render('views/clown.ejs');
});

app.get('/the_guest', (req, res) => {
	res.render('views/the_guest.ejs');
});

app.get('/qalb_aswad', (req, res) => {
	res.render('views/qalb_aswad.ejs');
});

app.get('/eyar_nari', (req, res) => {
	res.render('views/eyar_nari.ejs');
});

app.get('/al_badla', (req, res) => {
	res.render('views/al_badla.ejs');
});

app.get('/john_wick_1', (req, res) => {
	res.render('views/john_wick_1.ejs');
});

app.get('/john_wick_2', (req, res) => {
	res.render('views/john_wick_2.ejs');
});

app.get('/dark_phoenix', (req, res) => {
	res.render('views/dark_phoenix.ejs');
});

app.get('/survival_box', (req, res) => {
	res.render('views/survival_box.ejs');
});

app.get('/the_foreigner', (req, res) => {
	res.render('views/the_foreigner.ejs');
});


app.get('/girls_with_balls', (req, res) => {
	res.render('views/girls_with_balls.ejs');
});

app.get('/jawab_eeteqal', (req, res) => {
	res.render('views/jawab_eeteqal.ejs');
});

app.get('/ralph_breaks_the_internet', (req, res) => {
	res.render('views/ralph_breaks.ejs');
});

app.get('/the_great_hack', (req, res) => {
	res.render('views/the_great_hack.ejs');
});

//the_secret_life_of_pets_2

app.get('/the_secret_life_of_pets_2', (req, res) => {
	res.render('views/the_secret_life_of_pets_2.ejs');
});

app.get('/sitemap.xml', function(request, response) {
  response.sendFile(__dirname + '/sitemap.xml');
});

app.get('/verify.txt', function(request, response) {
  response.sendFile(__dirname + '/verify.txt');
});

//app.get('/panther', function(request, response) {
  //response.sendFile(__dirname + '/views/black_panther.html');
//});

app.get('/panther', (req, res) => {
	res.render('views/black_panther.ejs');
});

app.get('/stranger_things', (req, res) => {
	res.render('views/stranger_things.ejs');
});

app.get('/fast_and_furious_presents_hobbs_and_shaw', (req, res) => {
	res.render('views/fast_and_furious_hobbs_and_shaws.ejs');
});

//app.get('/spiderman_far_from_home', function(request, response) {
//  response.sendFile(__dirname + '/views/spiderman_far_from_home.html');
//});

app.get('/spiderman_far_from_home', (req, res) => {
	res.render('views/spiderman_far_from_home.ejs');
});

//app.get('/alita_battle_angel', function(request, response) {
  //response.sendFile(__dirname + '/views/alita_battle_angel.html');
//});

app.get('/alita_battle_angel', (req, res) => {
	res.render('views/alita_battle_angel.ejs');
});

app.get('/ads.txt', function(request, response) {
  response.sendFile(__dirname + '/views/ads.txt');
});

app.get('/login', function(request, response) {
  response.sendFile(__dirname + '/views/login.html');
});

//app.get('/godzilla_king_of_the_monsters', function(request, response) {
  //response.sendFile(__dirname + '/views/godzilla.html');
//});

app.get('/godzilla_king_of_the_monsters', (req, res) => {
	res.render('views/godzilla.ejs');
});

app.get('/peaky_blinders', (req, res) => {
	res.render('views/peaky_blinders.ejs');
});

app.get('/15_minutes_of_war', (req, res) => {
	res.render('views/15_minutes_of_war.ejs');
});

app.get('/night_hunter', (req, res) => {
	res.render('views/night_hunter.ejs');
});

//app.get('/partners', function(request, response) {
 // response.sendFile(__dirname + '/views/partners.html');
//});

app.get('/partners', (req, res) => {
	res.render('views/partners.ejs');
});

//app.get('/shazam', function(request, response) {
  //response.sendFile(__dirname + '/views/shazam.html');
//});

app.get('/shazam', (req, res) => {
	res.render('views/shazam.ejs');
});

//app.get('/movies', function(request, response) {
  //response.sendFile(__dirname + '/views/movies.html');
//});

app.get('/movies', (req, res) => {
	res.render('views/movies.ejs');
});


//app.get('/infinity', function(request, response) {
  //response.sendFile(__dirname + '/views/infinity.html');
//});

app.get('/infinity', (req, res) => {
	res.render('views/infinity.ejs');
});

//app.get('/about_us', function(request, response) {
  //response.sendFile(__dirname + '/views/about_us.html');
//});

app.get('/about_us', (req, res) => {
	res.render('views/about_us.ejs');
});

app.get("/below", (request, response) => {
         response.sendFile(__dirname + '/views/below.html');
    })


app.get('/leftovers', function(request, response) {
  response.sendFile(__dirname + '/views/leftovers.html');
});


app.get('/test', function(request, response) {
  response.sendFile(__dirname + '/views/test.html');
});

//app.get('/endgame', function(request, response) {
  //response.sendFile(__dirname + '/views/endgame2.html');
//});

app.get('/endgame', (req, res) => {
	res.render('views/endgame2.ejs');
});

app.get('/megamind', function(request, response) {
  response.sendFile(__dirname + '/views/megamind.html');
});

app.get('/avengers.html', function(request, response) {
  response.sendFile(__dirname + '/views/avengers.html');
});

//app.get('/aladdin', function(request, response) {
  //response.sendFile(__dirname + '/views/aladdin.html');
//});

app.get('/aladdin', (req, res) => {
	res.render('views/aladdin.ejs');
});
*/
//app.get("*", (request, response) => {
  //       response.sendFile(__dirname + '/views/error.html');
    //})

app.get('*', (req, res) => {
	res.render('views/error.ejs');
});

const http = require('https');
app.get("/", (request, response) => { //
  response.sendStatus(200);
});
app.listen(process.env.PORT);
console.log(process.env.PORT)
setInterval(() => {
  http.get(`https://hlamovies.glitch.me/`);
  http.get(`https://hlamovies.ga/`)
}, 280000);

// listen for requests :)



