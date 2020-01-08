# 🌟 Evrişimli Sinir Ağları ile İlgili İleri Kavramlar

## Önemli Terimler
| Terim               | Açıklama      |
| ------------------- |---------------|
| 🔷 Dolgulama (Padding) | Konvolüsyondan önce görüntüye ek kenar(lar) ekleme  |
| 🌠 Adımlı Konvolüsyon | `s` adım atarak konvolüsyon uygulama |
| 🏐 Hacim üzerine konvolüsyon | Konvolüsyonları n boyutlu girişe uygulama (örneğin RGB görüntüsü) |

## 🙌 Dolgulama (Padding)
Resme `n+2 x n+2` olacak şekilde görüntüye bir veya daha fazla kenar ekleyerek ve konvolüsyondan sonra görüntünün orijinal boyutu olan `n x n` resimle sonuçlanır.

`p` = eklenen sınır sayısı

> For convention: 0 ile doldurulur

## 🤔 Ne kadar dolgulanmalı?
Daha iyi anlaşılması için iki kavramımız olduğunu varsayalım:

### 🕵️‍♀️ Normal Konvolüsyon (Valid Convolution)
Dolgulama yok demektir, yani:

`n x n`  *  `f x f`  ➡  `n-f+1 x n-f+1`

### 🥽 Dolgulamalı Konvolüsyon (Same Convolution)
Çıktı boyutunun, girdi boyutuyla **aynı** olmasını sağlayacak kadar dolgulanır

Yani biz istiyoruz ki 🧐: 

`n+2p-f+1` = `n`

Bundan dolayı:

`p` = `(f-1)/2`

> Kabul: f tek sayı olarak seçilir 👩‍🚀


### 👀 Görselleştirme
<img src="../res/Conv.gif" width="250"  />


## 🔢 Adımlı Konvolüsyon (Strided Convolution)
Konvolüsyonların başka bir yaklaşımı, bölgelere belirli bir  `s` (adım sayısı) değerine göre filtre uygulayarak çıktıyı hesaplıyoruz. 

### 👀 Görselleştirme
<img src="../res/StridedConv.gif" width="250"  />


## 🤗 Genellemek İçin
Bir `n x n`'lik görüntü ve `f x f`'lik filtre için, `p` dolgulama miktarı ve `s` adım boyutu miktarı ile; çıkış görüntünün boyutu aşağıdaki formülle hesaplanabilir

$$\left \lfloor{\frac{n+2p-f}{s}+1}\right \rfloor \times \left \lfloor{\frac{n+2p-f}{s}+1}\right \rfloor$$

## 🚀 Hacim Üzerine Konvolüsyon
RGB görüntüsü üzerine konvolüsyon işlemini uygulamak için; örneğin, 10x10 piksel RGB görüntüsünde, teknik olarak görüntünün boyutu 10x10x3'tür, bu nedenle örneğin 3x3x3'lük _veya fxfx3_'lük filtre uygulayabiliriz 🤳

> Filtreler özel bir renk kanalına uygulanabilir 🎨

### 👀 Görselleştirme

<img src="../res/ConvVolume.png" width="400"  />

## 🤸‍♀️ Birden Fazla Filtre

<img src="../res/ConvMulti.png" width="400"  />


## 🎨 CNN'lerin Katman Türleri
| Katman               | Açıklama   |
| -------------------- |---------------|
| 💫 Convolution `CONV`   | Özellikleri çıkarmak için filtreler |
| 🌀 Pooling `POOL`       | Gösterme boyutunu düşürme ve hesaplamaları hızlandırma tekniği |
| ⭕ Fully Connected `FC` | Standart tek sinir ağı katmanı (tek boyutlu) |

> 👩‍🏫 Genellikle insanlar bir NN'deki katman sayısını bildirdiğinde, yalnızca ağırlıkları ve parametreleri olan katman sayısını söylerler

> Kabul: `CONV1` + `POOL1` = `LAYER1`

## 🤔 Neden Konvolüsyonları Kullanalım?
Ayarlanacak parametreleri düşürdüklerinden dolayı daha iyi performans 💫

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/3-cnnconcepts/1-commonconcepts-p2)

## 🧐 Referanslar
- [Convolutional Neural Networks (CNN) Introduction (😍✨✨✨)](https://indoml.com/2018/03/07/student-notes-convolutional-neural-networks-cnn-introduction/)