'use client';

import { KartuProfil } from "./components/KartuProfil";

export default function Home() {
  return (
    <main className="halaman">
      <h1>Kartu Profil Interaktif</h1>
      <p>Latihan React hari pertama.</p>

      {/* Kartu Profil */}
      <KartuProfil
        nama="Budi"
        kelas="XII RPL 1"
        hobi="Bermain futsal"
      />

      <KartuProfil
        nama="Dewa"
        kelas="XII RPL 1"
        hobi="Berenang"
      />

      <KartuProfil
        nama="Suci"
        kelas="XII RPL 1"
        hobi="Bermain futsal"
      />

    </main>
  );
}