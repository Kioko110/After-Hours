const ipaQuestions = [

{
q:"1. Organel yang berfungsi sebagai tempat respirasi sel adalah...",
a:["Nukleus","Mitokondria","Ribosom","Kloroplas"],
c:"Mitokondria"
},

{
q:"2. Rumus kimia air adalah...",
a:["CO2","H2O","NaCl","O2"],
c:"H2O"
},

{
q:"3. Satuan SI untuk panjang adalah...",
a:["Gram","Meter","Liter","Detik"],
c:"Meter"
},

{
q:"4. Perpindahan panas tanpa melalui zat perantara disebut...",
a:["Konduksi","Konveksi","Radiasi","Evaporasi"],
c:"Radiasi"
},

{
q:"5. Proses pembuatan makanan pada tumbuhan disebut...",
a:["Respirasi","Fotosintesis","Difusi","Fermentasi"],
c:"Fotosintesis"
},

{
q:"6. Lambang unsur emas adalah...",
a:["Ag","Au","Fe","Cu"],
c:"Au"
},

{
q:"7. Planet terbesar dalam tata surya adalah...",
a:["Mars","Venus","Saturnus","Jupiter"],
c:"Jupiter"
},

{
q:"8. Alat yang digunakan untuk mengukur gaya adalah...",
a:["Termometer","Dinamometer","Voltmeter","Neraca"],
c:"Dinamometer"
},

{
q:"9. Satuan arus listrik adalah...",
a:["Volt","Ampere","Joule","Newton"],
c:"Ampere"
},

{
q:"10. Hewan pemakan tumbuhan disebut...",
a:["Karnivora","Omnivora","Herbivora","Detritivora"],
c:"Herbivora"
}

];

const ipsQuestions = [

{
q:"1. Bapak Proklamator Republik Indonesia adalah...",
a:["Sudirman","Soekarno","Diponegoro","Kartini"],
c:"Soekarno"
},

{
q:"2. Ilmu yang mempelajari peta disebut...",
a:["Demografi","Kartografi","Sosiologi","Geologi"],
c:"Kartografi"
},

{
q:"3. Kegiatan yang bertujuan menyalurkan barang dari produsen ke konsumen disebut...",
a:["Produksi","Distribusi","Konsumsi","Investasi"],
c:"Distribusi"
},

{
q:"4. ASEAN didirikan pada tahun...",
a:["1965","1967","1970","1975"],
c:"1967"
},

{
q:"5. Mata uang negara Jepang adalah...",
a:["Won","Yuan","Yen","Dollar"],
c:"Yen"
},

{
q:"6. Gunung tertinggi di Indonesia adalah...",
a:["Semeru","Kerinci","Puncak Jaya","Merapi"],
c:"Puncak Jaya"
},

{
q:"7. Interaksi sosial memerlukan syarat utama berupa...",
a:["Teknologi","Kontak dan komunikasi","Modal","Kekuasaan"],
c:"Kontak dan komunikasi"
},

{
q:"8. Yang termasuk kebutuhan primer adalah...",
a:["Mobil","Laptop","Makanan","Perhiasan"],
c:"Makanan"
},

{
q:"9. Laut yang memisahkan Pulau Jawa dan Kalimantan adalah...",
a:["Laut Banda","Laut Flores","Laut Jawa","Laut Arafura"],
c:"Laut Jawa"
},

{
q:"10. Sistem ekonomi yang dianut Indonesia adalah...",
a:["Komando","Liberal","Pancasila","Tradisional"],
c:"Pancasila"
}

];

let currentQuestions = [];

function startQuiz(type){

    document.querySelector(".choice").style.display = "none";

    document.getElementById("quizContainer").style.display = "block";

    currentQuestions = type === "ipa"
        ? ipaQuestions
        : ipsQuestions;

    let html = "";

    currentQuestions.forEach((item,index)=>{

        html += `
        <div class="question">

            <p><strong>${item.q}</strong></p>

            ${item.a.map(answer => `
                <label>
                    <input
                    type="radio"
                    name="q${index}"
                    value="${answer}">
                    ${answer}
                </label>
                <br>
            `).join("")}

        </div>
        `;
    });

    html += `
        <button onclick="checkAnswers()">
            Lihat Hasil
        </button>
    `;

    document.getElementById("quizContainer").innerHTML = html;
}

function checkAnswers(){

    let score = 0;

    currentQuestions.forEach((item,index)=>{

        const selected =
        document.querySelector(
        `input[name="q${index}"]:checked`
        );

        if(selected && selected.value === item.c){
            score++;
        }
    });

    const nilai = score * 10;

    let pesan = "";

    if(nilai < 50){

        pesan = "😔 Kamu harus berusaha lagi!";

    }else if(nilai >= 60 && nilai <= 70){

        pesan = "📚 Kamu bisa tingkatkan lagi!";

    }else if(nilai >= 80 && nilai <= 90){

        pesan = "🔥 Hebat! Ayo terus kejar targetmu!";

    }else if(nilai >= 91 && nilai <= 99){

        pesan = "⭐ Kamu luar biasa!";

    }else if(nilai === 100){

        pesan = "👑 Sempurna!";

    }else{

        pesan = "Terus semangat belajar!";
    }

    document.getElementById("quizContainer").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("scoreText").innerHTML =
    `Nilai Kamu: <b>${nilai}</b>`;

    document.getElementById("message").innerHTML =
    pesan;
}
