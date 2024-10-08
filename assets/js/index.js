

let choice = prompt("Merhabalar lütfen yapmak istediğiniz uygulamayı seçin: \n 1) Basit İndirim Hesaplama: \n 2) Vize ve Final Notu ile Ortalama: \n 3) Haftanın Günü: \n 4) Büyük Sayıyı Bulma: \n 5) Saniyeyi Saate Çevirme: \n 6) Güncel Yaş Hesaplama: \n 7) Saatlik Ücret Hesaplama: \n 8) Aylık Taksit Hesaplama: \n 9) Kullanıcı Adı ve Şifre Kontrolü: \n 10) Net Kar Hesaplama:");

// burada 1. js ödevi bulunmakta
// burada 1.  js ödevi bulunmakta
// burada 1.  js ödevi bulunmakta

if (choice === "1") {
  let fiyat = prompt("lütfen ürünün kaç TL olduğunu yazınız:");
  let indirimOrani = prompt("lütfen indirim yüzdesini  yazınız:");
  let sonuc = fiyat - (fiyat * (indirimOrani / 100));
  alert("Ödemeniz gereken tutar:" + " " + sonuc + "TL");
}

// burada 2. js ödevi bulunmakta
// burada 2. js ödevi bulunmakta
// burada 2. js ödevi bulunmakta


if (choice === "2") {
  let vizeNotu = prompt("Lütfen vizeden aldığınız notu giriniz:");
  let finalNotu = prompt("Lütfen finalden aldığınız notu giriniz:");
  let ortalama = (((vizeNotu * 40) / 100) + ((finalNotu * 60) / 100));
  if (vizeNotu > 100 || finalNotu > 100) {
    alert("lütfen geçerli bir not giriniz.");
  } else if (ortalama >= 50) {
    alert("Ortalamanız: " + ortalama + " " + "Bu dersi başarıyla geçtiniz");
  } else if (50 > ortalama > 40) {
    alert("Ortalamanız: " + ortalama + " " + "Bu dersten şartlı gectiniz.");
  } else if (39 > ortalama) {
    alert("Ortalamanız: " + ortalama + " " + "Bu dersten kaldınız");
  }
}

// burada 3. js ödevi bulunmakta
// burada 3. js ödevi bulunmakta
// burada 3. js ödevi bulunmakta


if (choice === "3") {
  let gün = prompt("Lütfen haftanın gününe karşılık gelen sayıyı yazınız: ");
  if (gün === "1") {
    alert("BUGÜN GÜNLERDEN PAZARTESİ")
  } else if (gün === "2") {
    alert("BUGÜN GÜNLERDEN SALI")
  } else if (gün === "3") {
    alert("BUGÜN GÜNLERDEN ÇARŞAMBA")
  } else if (gün === "4") {
    alert("BUGÜN GÜNLERDEN PERŞEMBE")
  } else if (gün === "5") {
    alert("BUGÜN GÜNLERDEN CUMA")
  } else if (gün === "6") {
    alert("BUGÜN GÜNLERDEN CUMARTESİ")
  } else if (gün === "7") {
    alert("BUGÜN GÜNLERDEN PAZAR")
  } else {
    alert("Sanırım yanlış girdiniz.")
  }
}

// burada 4. js ödevi bulunmakta
// burada 4. js ödevi bulunmakta
// burada 4. js ödevi bulunmakta

if (choice === "4") {
  let ilkSayı = prompt("Lütfen bir sayı giriniz:");
  let ikinciSayı = prompt("Lütfen bir sayı giriniz:");
  let üçüncüSayı = prompt("Lütfen bir sayı giriniz:");

  if (ilkSayı > ikinciSayı && ilkSayı > üçüncüSayı) {
    alert("En büyük sayı:" + " " + ilkSayı);
  } 
  if (ikinciSayı > üçüncüSayı && ikinciSayı > ilkSayı) {
    alert("En büyük sayı:" + " " + ikinciSayı);
  } 
  if (üçüncüSayı > ilkSayı && üçüncüSayı > ikinciSayı) {
    alert("En büyük sayı:" + " " + üçüncüSayı);
  } else { alert("Sayılar eşittir") }
}



// burada 5. js ödevi bulunmakta
// burada 5. js ödevi bulunmakta
// burada 5. js ödevi bulunmakta

if (choice === "5") {
  let totalSaniye = prompt("değerini merak ettğiniz saniyeyi lütfen yazınız:\n (örn:1540)");
  let saat = Math.floor(totalSaniye / 3600); //burası kaç saat olduğunu öğrendiğim kısım
  let artıkSaniye = (totalSaniye - ((Math.floor(totalSaniye / 3600) * 3600))); //burası artıksaniye mesela 120 de olabilir 1900 de olabilir
  let kalanSaniye = (artıkSaniye - (Math.floor(artıkSaniye / 60) * 60));
  let dakika = Math.floor(artıkSaniye / 60);
  if (artıkSaniye > 59) {
    alert(saat + " " + "saat" +" " + dakika + " " + "dakika" + " "+ kalanSaniye + " " + "saniye");
  }
  if( 59 > artıkSaniye ) {
    alert(saat + " " + "saat" +" " + dakika + " " + "dakika" + " "+  kalanSaniye + " " + "saniye");
  }
}


// burada 6. js ödevi bulunmakta
// burada 6. js ödevi bulunmakta
// burada 6. js ödevi bulunmakta


if( choice==="6" ){
  let yıl = prompt("Lütfen doğduğunuz yılı yazınız:");
  let ay = prompt("Lütfen doğduğunuz ayı yazınız:");
  let gün = prompt("Lütfen doğduğunuz günü yazınız:");
  let tumYas = ("Yaşamış olduğunuz ömür: " + ( 2024 - yıl )  +" " + "yıl"+ " "+( 12 - ay )+ " "+ "ay"+ " " +( 31 - gün )+" " + "gün" )
  alert(tumYas)
}


// burada 7. js ödevi bulunmakta
// burada 7. js ödevi bulunmakta
// burada 7. js ödevi bulunmakta

if( choice === "7"){
  let saat = prompt("Lütfen çalıştığınız saat sayısını giriniz")
  let ücret = prompt("Lütfen çalıştığınız saat ücretini giriniz")
  let maaş =(( saat*ücret )*20)
  alert("Aldığınız maaş: " + maaş)
}

// burada 8. js ödevi bulunmakta
// burada 8. js ödevi bulunmakta
// burada 8. js ödevi bulunmakta




// burada 9. js ödevi bulunmakta
// burada 9. js ödevi bulunmakta
// burada 9. js ödevi bulunmakta


if (choice === "9") {
  let kullanıcıAdı = prompt("lütfen kullanıcı adınızı giriniz:");
  let şifre = prompt("lütfen şifrenizi giriniz:");

  if (kullanıcıAdı === "admin" && şifre === "1234") {
    alert("Giriş başarılı!")

  } else ("Kullanıcı adı veya şifre hatalı!")
}