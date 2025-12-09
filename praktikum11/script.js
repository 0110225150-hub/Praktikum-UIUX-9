// ====================== LOGIN AUTH ======================

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "user" && pass === "user") {
        alert("Login sukses!");
        document.getElementById("loginMessage").innerHTML = "<span style='color:green;'>Login Sukses</span>";
        
        // tampilkan halaman utama
        document.getElementById("loginContainer").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");

    } else {
        alert("Login gagal!");
        document.getElementById("loginMessage").innerHTML = "<span style='color:red;'>Username atau password salah</span>";
    }
}

// ====================== CHATBOX ======================

function kirim() {
    let pesan = document.getElementById("inputBox").value;

    if (pesan.trim() === "") return;

    let chatArea = document.getElementById("chatArea");
    chatArea.innerHTML += pesan + "<br>";

    document.getElementById("inputBox").value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
}

// ====================== IMAGE PICKER ======================

function tampilkanGambar() {
    let pilihan = document.getElementById("pilihan").value;
    
    if (pilihan !== "") {
        alert("Gambar dipilih: " + pilihan);
        document.getElementById("gambar").src = pilihan;
    }
}
