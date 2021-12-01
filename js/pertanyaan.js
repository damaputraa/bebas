function Quiz(pertanyaan) {
	this.score = 0;
	this.pertanyaan = pertanyaan;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.pertanyaan[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
	if(this.getQuestionIndex().isCorrectAnswer(answer)) {
			this.score++;
	}

	this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
	return this.questionIndex === this.pertanyaan.length;
}

function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
	return this.answer === choice;
}


function populate() {
	if(quiz.isEnded()) {
			showScores();
	}
	else {
			// Menampilkan Pertanyaan
			var element = document.getElementById("question");
			element.innerHTML = quiz.getQuestionIndex().text;

			// Menampilkan Pilihan
			var choices = quiz.getQuestionIndex().choices;
			for(var i = 0; i < choices.length; i++) {
					var element = document.getElementById("choice" + i);
					element.innerHTML = choices[i];
					guess("btn" + i, choices[i]);
			}

			showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
			quiz.guess(guess);
			populate();
	}
};


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Pertanyaan " + currentQuestionNumber + " dari " + quiz.pertanyaan.length;
};

function showScores() {
	var gameOverHTML = "<h1>Hasil Akhir</h1>";
	gameOverHTML += "<h2 id='score'> Score Kamu: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHTML;
};

// daftar pertanyaan disini
var pertanyaan = [
	new Question("Manakah dibawah ini yang merupakan pengertian/ makna dari Batang Garing ", ["A. Pohon Penghidupan", "B. Bintang Kehidupan","C. Pohon Kebijakan", "D. Pohon Kehidupan"], "D. Pohon Kehidupan"),

	new Question("Batang Garing Memiliki bentuk batang yang unik yaitu seperti ", ["A. Pedang Excalibur", "B. Mata Tombak Lurus Ke Atas","C. Palu Godam", "D. Trisula / Tombak Poseidon"], "B. Mata Tombak Lurus Ke Atas"),

	new Question("Mengapa pohon batang garing dijadikan symbol, padahal masih banyak pohon-pohon lainya yang ada di kalimantan ", ["A. Karna Pohon tersebut sesuai untuk melambangkan Ranying Hatalla Langit", "B. Karna Saat itu hanya ada pohon batang garing yang mudah di gambar","C. Karna Pohonya berbentuk keren", "D. karena selera para leluhur aja"], "A. Karna Pohon tersebut sesuai untuk melambangkan Ranying Hatalla Langit"),

	new Question("Dahan dari batang garing memiliki 3 buah arti yang melambangkan symbol Maharaja yaitu ", ["A. Maharani Sangiang, sangen, dan Bani/Bano", "B. Maharaja Sangiang, sangen, dan johan","C. Mahraja Sangen, Sangiang dan Singa", "D. Maharaja Sangiang, sangen, dan Banu/Buno"], "D. Maharaja Sangiang, sangen, dan Banu/Buno"),

	new Question("Cerita Batang Garing punya banyak versi, mulai tahun berapakah cerita itu di tulis dalam Bahasa indonesia ", ["A. 1879 SM", "B. 1945","C. 1971", "D. 1988"], "C. 1971"),

	new Question("Apa yang dilambangkan oleh daun dari batang garing ", ["A. Kesetiaan dan Keagungan", "B. Ekor Burung Enggang","C. Kesehatan dan kesejahteraan", "D. Cinta kasih seribu bayang"], "B. Ekor Burung Enggang"),

	new Question("Setiap bagian dari batang garing memiliki nama, apa nama bagian pucuk batang garing ", ["A. Bukit Balau", "B. Ujung Tombak","C. Jujutsu Genkai", "D. Maharaja"], "A. Bukit Balau"),

	new Question("Mana dibawah ini yang bukan fungsi dari symbol batang garing ", ["A. Melambangkan 3 Maharaja", "B. Melambangkan Ekor Burung Enggang","C. Melambangkan Keputusasaan", "D. Melambangkan Dunia bawah"], "C. Melambangkan Keputusasaan"),
	
	new Question("Pada bagian bawah batang garing ada guci berisi air suci, sering juga disebut sebagai sebuah pulau, pulau apakah itu ", ["A. Pulau Sabat", "B. Pulau Bangkuang","C. Pulau Bengaris", "D. Pulau Batu Nindan Tarung"], "D. Pulau Batu Nindan Tarung"),

	new Question("Manakah dibawah ini yang merupakan pengertian/ makna dari Batang Garing ", ["A. Melambangkan 3 Maharaja", "B. Diciptakanya sebuah suku/leluhur","C. Lahirnya seorang anak", "D. Berakhirnya perang"], "B. Diciptakanya sebuah suku/leluhur"),

];

// buat quiz
var quiz = new Quiz(pertanyaan);

// tampil quiz
populate();