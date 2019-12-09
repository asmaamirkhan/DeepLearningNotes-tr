# 👀 Evrişimli Sinir Ağlarının Görselleştirilmesi
Kavramları toplamak için [P1](./0-GenelKavramlar.md) ve [P2](./1-GenelKavramlar-P2.md) 'de açıklanan kavramların görselleştirilmesi

### 💫 Convolution
Özellikleri çıkarmak için filtre uygulama 🤗

<img src="../res/ConvolutionEx.png" width="450"  />

**Problem 😰:** Görüntüler küçülüyor 😱

### 😏 Padding'e Bir Göz At  

<img src="../res/Padding.png" width="350"  />

Görüntüler Çok Büyük, Performans Düşük 😔

### 😉 Pooling' Bakalım

<img src="../res/MaxPooling.png" width="350"  />

### 🙄 Peki, RGB resmim var 
Filtrelerin renk kanalı sayısına eşit derinliğe sahip olması gerekir

<img src="../res/ConvOverVol.png" width="450"  />

### 🤡 Tamam, `n` tane filtre uygulamak istiyorum 
Çıktının derinliği `n` ye eşit olacaktır

<img src="../res/ConvMultiFilter.png" width="450"  />

## 🤗 Tam Bir Örnekle Anlamanı Kontrol Et 

<img src="../res/FullCNNEx.png" width="450"  />

## 🧐 Referanslar
- [DeepLearning series: Convolutional Neural Networks (😍✨✨✨)](https://medium.com/machine-learning-bites/deeplearning-series-convolutional-neural-networks-a9c2f2ee1524)