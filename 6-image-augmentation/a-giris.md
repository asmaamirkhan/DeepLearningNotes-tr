---
description: "\U0001F921 Resim Artırma Tekniği Kavramları"
---

# 🌱 Giriş

* 💥 Aşırı öğrenmeden kaçınmak için kullanılan bir teknik olan _Resim Artırma_ Temelleri
* ⭐ Küçük bir veri setine sahip isek, veri setini eğitim için tüm senaryoları açacak ve resim artırmanın çeşitli teknikleriyle çalıştırabilecek temel görüntüleri değiştirmeden manipüle edebiliyoruz.

> Not: Resim artırma Hem eğitim hem de test seti için gereklidir 😅

## 🚩 Resim Artırmanın Temel Kavramları

👩‍🏫 Konsept çok basittir:

Verilerimiz sınırlıysa, gelecekteki olası öngörüleri karşılayacak verilere sahip olma ihtimalimiz de sınırlıdır ve mantıksal olarak ne kadar az veriye sahipsek, modelimizin henüz görmediği veriler için doğru tahminler alma şansımız o kadar azdır.

> 🙄 Eğer kedileri tespit etmek için bir model eğitiyorsak ve modelimiz bir kedinin uzanırken nasıl göründüğünü hiç görmemişse, gelecekte de tanımayabilir.

* Büyütme, döndürme gibi **dönüşümler** kullanarak eğitim yaparken, görüntülerimizi anında değiştirir. 
* Bu nedenle, 'ayakta' olan bir kediyi 90 derece döndürerek uzanmış bir kedinin görüntüsünü 'taklit edebilir'.
* Bu şekilde, elimizdeki ver seti ucuz ✨ bir şekilde büyütmüş oluyoruz.

> 🔎 Not: Orijinal veriyi olduğu gibi değiştirmemek adına Image Augmentation'ı bellekte yapmak yerine çalışma zamanında _runtime'da_ yapılması tercih edilir 🤔

## 🤸‍♀️ Image Augmentation Teknikleri

### ✅ Yansıtma \(Mirroring\)

Görüntüyü eksene göre yansıtmak

#### 🚀 Örnek

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/mirroring.jpg)

### ✂ Rastgele Kesme \(Random Cropping\)

Bir görüntüyü alıp rastgele kesimler almak

#### 🚀 Örnek

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/cropping.jpg)

### 🎨 Renk Kaydırma \(Color Shifting\)

Renk kanallarına değerler ekleme ve çıkarma

#### 🚀 Örnek

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/colorshifting.jpg)

### 📐 \(Açı Dönüştürme\) Shearing Transformation

Açı dönüşümü görüntünün açısını kaydırır

#### 🚀 Example

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/shearingtransform.png)

## 👩‍💻 Kod Örneği

Aşağıdaki kod parçası Image Augmentation yapmak için kullanılır

```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator

train_datagenerator = ImageDataGenerator(
      rescale = 1./255,
      rotation_range = 40,
      width_shift_range = 0.2,
      height_shift_range = 0.2,
      shear_range = 0.2,
      zoom_range = 0.2,
      horizontal_flip = True,
      fill_mode = 'nearest')
```

| Parametre | Açıklama |
| :--- | :--- |
| `rescale` | Görüntüleri yeniden ölçeklendirme, NN'ler normalleştirilmiş verilerle daha iyi çalışır, bu yüzden görüntüleri yeniden ölçeklendirirsek değerler 0,1 arasında olur |
| `rotation_range` | Derece cinsinden bir değer \(0-180\), içinde resimlerin rasgele döndürülmesi için bir aralık |
| Height and width shifting | Görüntüleri dikey veya yatay olarak rasgele kaydırır |
| `shear_range` | Rastgele açı dönüşümü uygular |
| `zoom_range` | Fotoğrafları rasgele yakınlaştırır |
| `horizontal_flip` | Rgörüntülerin yarısını yatay olarak rasgele çevirir |
| `fill_mode` | Yeni oluşturulan pikselleri doldurmak için kullanılan, bir döndürmeden veya genişlik / yükseklik kaymasından sonra görünebilecek bir stratejidir |

> Full kod örneği [burada 🐾](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/896641cdc5cc3a72ffc7b7526f64e437e8b3714b/6-ImageAugmentation/0-ImageAugmentation.ipynb) 👈

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/6-imageaugmentation/a-introduction)

## 🧐 Referanslar

* [More About Image Augmentation](https://github.com/keras-team/keras-preprocessing)
* [More About Image Pre-processing](https://keras.io/preprocessing/image/)
* [Detailed Image Augmentation Techniques](http://datahacker.rs/020-cnn-data-augmentations/)

