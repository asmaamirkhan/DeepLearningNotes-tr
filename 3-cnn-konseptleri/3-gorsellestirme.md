# 👀 Evrişimli Sinir Ağlarının Görselleştirilmesi

Kavramları toplamak için [P1](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/e17776b1b8771d34c5ad3be2b028a41ce37fe32c/3-CNNKonseptleri/0-GenelKavramlar.md) ve [P2](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/e17776b1b8771d34c5ad3be2b028a41ce37fe32c/3-CNNKonseptleri/1-GenelKavramlar-P2.md) 'de açıklanan kavramların görselleştirilmesi

### 💫 Konvolüsyon

Özellikleri çıkarmak için filtre uygulama 🤗

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/convolutionex.png)

**Problem 😰:** Görüntüler küçülüyor 😱

### 😏 Dolgulamaya Bir Göz At

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/padding.png)

Görüntüler Çok Büyük, Performans Düşük 😔

### 😉 Pooling' Bakalım

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/maxpooling.png)

### 🙄 Peki, RGB resmim var

Filtrelerin renk kanalı sayısına eşit derinliğe sahip olması gerekir

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/convovervol.png)

### 🤡 Tamam, `n` tane filtre uygulamak istiyorum

Çıktının derinliği `n` ye eşit olacaktır

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/convmultifilter.png)

## 🤗 Tam Bir Örnekle Anlamanı Kontrol Et

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/fullcnnex.png)

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/3-cnnconcepts/3-visualization)

## 🧐 Referanslar

* [DeepLearning series: Convolutional Neural Networks \(😍✨✨✨\)](https://medium.com/machine-learning-bites/deeplearning-series-convolutional-neural-networks-a9c2f2ee1524)

