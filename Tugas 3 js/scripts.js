document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('welcomeModal'), {
        backdrop: 'static',
        keyboard: false
    });
    myModal.show();

    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const namaLengkap = document.getElementById('namaLengkap').value;
        var konfirmasiModal = new bootstrap.Modal(document.getElementById('konfirmasiModal'), {
            backdrop: 'static',
            keyboard: false
        });
        konfirmasiModal.show();
    
        // Event listener untuk tombol konfirmasi pada modal konfirmasi
        document.getElementById('btnKonfirmasiPendaftaran').addEventListener('click', function () {
            konfirmasiModal.hide(); // Sembunyikan modal konfirmasi setelah diklik
            var modalKetiga = new bootstrap.Modal(document.getElementById('modalKetiga'), {
                backdrop: 'static',
                keyboard: false
            });
            document.getElementById('pesanTerdaftar').innerText = "Selamat " + namaLengkap + ", Anda sudah terdaftar.";
            modalKetiga.show(); // Tampilkan modal ketiga
        });
        document.getElementById('modalKetiga').addEventListener('hidden.bs.modal', function () {
            document.getElementById('registrationForm').reset(); // Mengosongkan formulir
        });
        
    });
});    
