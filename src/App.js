/*
Nama: Muhammad Putra Erlangga Syawaluddin
Kelas: XII RPL
Alamat: Kecamatan Karangploso, Kabupaten Malang

Fakta Unik:
- React menggunakan Virtual DOM untuk meningkatkan performa rendering
- Nama React awalnya adalah "FaxJS" sebelum dirilis ke publik
- React dikembangkan pertama kali oleh Jordan Walke di Facebook

Penjelasan Kode:
*/

// Import komponen Header dan TodoList dari folder components
import Header from "./components/Header";
import TodoList from "./components/TodoList";

// Komponen utama App yang akan merender seluruh aplikasi
function App() {
  return (
    // Div utama dengan className App sebagai container
    <div className="App">
      {/* Div content sebagai wrapper untuk komponen-komponen */}
      <div className="content">
        {/* Render komponen Header untuk bagian atas aplikasi */}
        <Header />
        {/* Render komponen TodoList yang berisi daftar todo */}
        <TodoList />
      </div>
    </div>
  );
}

// Export komponen App agar bisa digunakan di file lain
export default App;