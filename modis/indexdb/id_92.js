// Tasselled Cap - vegetation
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=92=&sensor_id=14

let index = -0.2848*B10-0.2435*B04-0.5436*B01+0.7243*B02+0.0840*B06-0.1800*B07;
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);