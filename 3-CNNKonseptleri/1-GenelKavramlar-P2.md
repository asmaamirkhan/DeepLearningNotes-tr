# 🌟 Evrişimli Sinir Ağları ile İlgili İleri Kavramlar

## Önemli Terimler
| Terim               | Açıklama      |
| ------------------- |---------------|
| 🔷 Padding             | _Convolution_'dan önce görüntüye ek kenar(lar) ekleme  |
| 🌠 Strided Convolution | `s` adım atarak _convolution_ yapma |
| 🏐 Convolutions Over Volume | _Convolution_'ları n boyutlu girişe uygulama (örneğin RGB görüntüsü) |

## 🙌 Padding
Adding an additional one border _or more_ to the image so the image is n+2*n+2 and after convolution we end up with n * n image which is the origianl size of the image

Resme `n+2 x n+2` olacak şekilde görüntüye bir veya daha fazla kenar ekleyerek ve _convolution_'dan sonra görüntünün orijinal boyutu olan `n x n` resimle sonuçlanır.

`p` = eklenen sınır sayısı

> For convention: 0 ile doldurulur

## 🤔 Ne kadar 'pad' edilmeli?
Daha iyi anlaşılması için iki kavramımız olduğunu varsayalım:

### 🕵️‍♀️ Valid Convolutions
_Padding_ yok demektir, yani:

`n x n`  *  `f x f`  ➡  `n-f+1 x n-f+1`

### 🥽 Same Convolutions
Pad so that output size is the **same** as the input size.

Çıktı boyutunun, girdi boyutuyla **aynı** olmasını sağlayacak kadar _pad_ edilir

Yani biz istiyoruz ki 🧐: 

`n+2p-f+1` = `n`

Bundan dolayı:

`p` = `(f-1)/2`

> For convention: f tek sayı olarak seçilir 👩‍🚀


### 👀 Görselleştirme
<img src="../res/Conv.gif" width="250"  />


## 🔢 Strided Convolution
_Convolution_'ların başka bir yaklaşımı,Bölgelere belirli bir  `s` (adım sayısı) değerine göre filtre uygulayarak çıktıyı hesaplıyoruz. 

### 👀 Görselleştirme
<img src="../res/StridedConv.gif" width="250"  />


## 🤗 Genellemek İçin
Bir `n x n`'lik görüntü ve `f x f`'lik filtre için, `p` padding miktarı ve `s` striding miktarı ile; çıkış görüntünün boyutu aşağıdaki formülle hesaplanabilir

$$\left \lfloor{\frac{n+2p-f}{s}+1}\right \rfloor \times \left \lfloor{\frac{n+2p-f}{s}+1}\right \rfloor$$

## 🚀 Convolutions Over Volume
RGB görüntüsü üzerine _convolution_ işlemini uygulamak için; örneğin, 10x10 piksel RGB görüntüsünde, teknik olarak görüntünün boyutu 10x10x3'tür, bu nedenle örneğin 3x3x3'lük _veya fxfx3_'lük filtre uygulayabiliriz 🤳

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

## 🤔 Neden Convolotion'ları Kullanalım?
Ayarlanacak parametreleri düşürdüklerinden dolayı daha iyi performans 💫

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/3-cnnconcepts/1-commonconcepts-p2)

## 🧐 Referanslar
- [Convolutional Neural Networks (CNN) Introduction (😍✨✨✨)](https://indoml.com/2018/03/07/student-notes-convolutional-neural-networks-cnn-introduction/)