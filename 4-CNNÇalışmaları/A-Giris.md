---
description: 🔦 Evrişimli Sinir Ağları Kodları 
---

# 🌱 Giriş
Bu klasör giderek kodlar ve notlar ile doldurulacak

## 👩‍💻 Kodlar
0. [👶 Basic CNNs](./0-CNN.ipynb)
1. [👀 CNN Visualization](./1-CNNVisualization.ipynb)
2. [👨‍👩‍👧‍👧 Human vs Horse Classifier with CNN](./2-HorseHumanClassifier.ipynb)
3. [🐱 Dog vs Cat Classifier with CNN](./3-DogCatClassifier.ipynb) 
4. [🎨 Multi-Class Classification](./4-MultiClassRPS.ipynb)
5. [🌐 Web based CNNs](./HandDigitClassifier)

## ✋ RPS Dataset
- Rock Paper Scissors, Taş/Kağıt/Makas pozlarında farklı ellerin 2.892 görüntüsünü içeren bir veri setidir.
- Taş Kağıt Makas, çeşitli ellerden, farklı ırklardan, yaşlardan ve cinsiyetlerden, Taş / Kağıt veya Makas'a pozlanmış ve **etiketlenmiş** görüntüler içerir.

> 🔎 Bu verilerin tümü beyaz bir arka plana karşı pozlandırılmıştır. Her görüntü 24bit renkte ve 300×300 pikseldir

## 🐛 CNN Debugging

Bizim CNN'imiz hakkında bu şekilde bilgi alabiliriz;

```python
model.summary()
``` 

Çıkış da aşağıdaki şekilde olacaktır:

``` 
Layer (type)                 Output Shape              Param #   
=================================================================
conv2d_18 (Conv2D)           (None, 26, 26, 64)        640       
_________________________________________________________________
max_pooling2d_18 (MaxPooling (None, 13, 13, 64)        0         
_________________________________________________________________
conv2d_19 (Conv2D)           (None, 11, 11, 64)        36928     
_________________________________________________________________
max_pooling2d_19 (MaxPooling (None, 5, 5, 64)          0         
_________________________________________________________________
flatten_9 (Flatten)          (None, 1600)              0         
_________________________________________________________________
dense_14 (Dense)             (None, 128)               204928    
_________________________________________________________________
dense_15 (Dense)             (None, 10)                1290      
=================================================================
``` 

👩‍💻 Notbook'taki kod için:
> [Burada](./0-CNN.ipynb) 🐾

* 🔎 Görüntülerin orijinal boyutları 28x28 piksel
* 1️⃣ 1. katman: Filtre, kenarlardaki piksellere uygulanamaz 
  * Birinci katmanın çıkışı 26x26 px boyutundadır
* 2️⃣ 2. katman: `2x2 max pooling` uyguladıktan sonra, boyutlar 2'ye bölünecek
  * Bu katmanın çıkışı 13x13 px boyutundadır
* 3️⃣ 3. katman: Filtre, kenarlardaki piksellere uygulanamaz 
  * Bu katmanın çıkışı 11x11 px boyutundadır
* 4️⃣ 4. katman: `2x2 max pooling` uyguladıktan sonra, boyutlar 2'ye bölünecek
  * Bu katmanın çıkışı 5x5 px boyutundadır
* 5️⃣ 5. katman: Önceki katmanın çıkışı düzleşecektir (flattened olacaktır)
  * Bu katman `5x5x64=1600` birime sahiptir
* 6️⃣ 6. katman: 128 birim içerecek şekilde ayarladık
* 7️⃣ 7. katman: 10 kategorimiz olduğu için 10 birimden oluşmaktadır.

> 😵 😵

## 👀 Görselleştirme
Her katmanın çıktısının görselleştirilmesi [burada](./1-CNNVisualization.ipynb) mevcuttur 🔎

## 👷‍♀️ Ağ Görselleştirme Aracı
[Netron ✨✨](https://github.com/lutzroeder/netron)

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/4-cnnworks)

## 🧐 Referanslar
* [Binary Cross-Entropy](https://gombru.github.io/2018/05/23/cross_entropy_loss/)
* [RMSProp Explained](http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf)
* [RMSProp in Tensorflow](https://www.tensorflow.org/api_docs/python/tf/train/RMSPropOptimizer)
* [Binary Classification](https://www.youtube.com/watch?v=eqEc66RFY0I&t=6s)
* [TensorFlow: an ML platform for solving impactful and challenging problems](https://www.youtube.com/watch?v=NlpS-DhayQA)
* [Rock Paper Scissors Dataset](http://www.laurencemoroney.com/rock-paper-scissors-dataset/)

