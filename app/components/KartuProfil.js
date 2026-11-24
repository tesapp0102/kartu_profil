export function KartuProfil({ nama, kelas, hobi }) {
  return (
    <div className="daftar-kartu">
      <div className="kartu">
        <h2 className="text-purple-500">{nama}</h2>
        <p>Kelas: {kelas}</p>
        <p>Hobi: {hobi}</p>
      </div>
    </div>
  );
}
