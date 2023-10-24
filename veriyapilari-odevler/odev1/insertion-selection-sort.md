
## Insertion Sort

#### [22,27,16,2,18,6]

    [22,27,16,2,18,6] -> 27 > 22 soldakinden büyük aynı kalır.
    [16,22,27,2,18,6] -> 16 < 27  ve 16 < 22 başa geçer.
    [2,16,22,27,18,6] -> 2, soldakilerin hepsinden küçük en başa alınır.
    [2,16,18,22,27,6] -> 18 > 16 ve 18 < 22
    [2,6,16,18,22,27] -> 6 > 2 ve 6 < 16 olduğu yere alınır.

## Big-O Gösterimi
    1 + 2 + .... + n kere bakılmış oldu.
    Yani n*(n+1)/2 = (n&sup2; + n)/2
    Dominantı n&sup2; olduğu için 
    Big-O gösterimi = O(n&sup2;) olur.

## Time Complexity 
    Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer?
    Cevap: Average case: Aradığımız sayının ortada olması

---

## Selection Sort
  
#### [7,3,5,8,2,9,4,15,6]

    - En küçük sayıyı bulana kadar bakar, en baştakiyle yer değiştirir.
    1.adım - [2,3,5,8,7,9,4,15,6] -> 2 ile 7 yer değiştirdi.
    2.adım - [2,3,5,8,7,9,4,15,6] -> 2 sabitlenir, diğerleri arasındaki en küçüğü bulur.Değişiklik olmadı.
    3.adım - [2,3,4,8,7,9,5,15,6] -> 2 ve 3 sabit, sonraki en küçük sayı 4, 5 ile yer değiştirir.
    4.adım - [2,3,4,5,7,9,8,15,6] -> 2,3,4 sabit, 5 en küçük, 8 ile yer değiştirir.
    5.adım - [2,3,4,5,6,9,8,15,7] -> 2,3,4,5 sabit 6 ile 7 yer değiştirir.
    6.adım - [2,3,4,5,6,7,8,15,9] 
    7.adım - [2,3,4,5,6,7,8,15,9]
    8.adım - [2,3,4,5,6,7,8,9,15]

    
</body>
</html>