/*
Nama: Muhammad Putra Erlangga Syawaluddin
Kelas: XII RPL
Alamat: Kecamatan Karangploso, Kabupaten Malang

Fakta Unik:
- ReactDOM.render() akan digantikan dengan createRoot() di React 18
- React pertama kali dirilis pada tahun 2013
- StrictMode membantu mendeteksi bug potensial dalam aplikasi
*/

// Import React library yang dibutuhkan untuk membuat komponen
import React from 'react';
// Import ReactDOM untuk merender aplikasi ke DOM browser
import ReactDOM from 'react-dom';
// Import file CSS untuk styling aplikasi
import './index.css';
// Import komponen utama App
import App from './App';

// Render aplikasi React ke dalam DOM
ReactDOM.render(
  // StrictMode untuk mendeteksi potensi masalah dalam aplikasi
  <React.StrictMode>
    {/* Render komponen App sebagai root komponen */}
    <App />
  </React.StrictMode>,
  // Target element dengan id 'root' di file HTML
  document.getElementById('root')
);