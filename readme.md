# REVIEW OOP (Game Arena)

## PLAYER

| type    | attack | life |
| ------- | ------ | ---- |
| soldier | 100    | 600  |
| archer  | 80     | 800  |
| giant   | 200    | 1000 |
| enemy   | 20     | 100  |

Perilaku: 

- Player punya `healing()` (berbeda tingkat healing tiap jenis player ke defense)
- Player punya `greeting ()` (berbeda tiap player)
- Player punya status `isDead`

## ARENA

| type    | max_player | max_enemy |
| ------- | ---------- | --------- |
| forest  | 8          | 16        |
| desert  | 6          | 12        |
| castile | 5          | 10        |

Aksi: 

- Arena punya `addPlayer()` 
  - Memasukkan player ke dalam arena
  - Tidak bisa dijalankan lagi jika sudah penuh atau melebihi kapasitas
- Arena punya `createEnemy(number)` 
  - Maksimum di jalankan hanya sekali
  - Nama enemy: `enemy1`, enemy2, enemy3
- Arena punya `playersAttack()`
  - Masing masing player menyerang enemy
  - Tidak bisa dijalankan jika player atau enemy kosong
- Arena punya`enemyAttack()` 
  - Masing masing enemy menyerang player
  - Tidak bisa dijalankan jika player atau enemy kosong
- Arena punya`healing()` 
  - Masing masing player yang belum mati bisa healing
  - Hanya bisa dijalankan sekali
- Arena punya `report()` 
  - Menampilkan status setiap player dan enemy, greeting, jumlah player alive dan enemy alive
- Arena punya `destroy()`
  - Mengosongi isi arena dari players dan enemies

Arena dijalankan secara Chaining

 



