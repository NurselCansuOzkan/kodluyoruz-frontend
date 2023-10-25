## Merge Sort

#### [16,21,11,8,12,22]
    Her sırada eleman sayısı tek eleman kalana kadar 2ye bölünür.
    
    [16,21,11]  [8,12,22]
    [16]  [21,11]   [8,12]  [22]
    [16]  [21]  [11]   [8]  [12]  [22]  ->2ye bölme işlemi tek eleman kalana kadar devam etti.
    [16]  [11,21]   [8,12]  [22]        ->birleştirme yaparken her grup kendi arasında sıralandı.
    [11,16,21]  [8,12,22]               ->son iki grup da birbirleriyle sıralandı.
    [8,11,12,16,21,22]

## Big-O Gösterimi
    Eleman sayısı tek eleman kalana kadar 2ye bölünerek devam ettiği için 
    2ˣ = n
    x=logn
    Sıralama yaparken her satırda (n-1) kere bakıldığı için dominantı n olur.

    n * logn = O(nlogn)

