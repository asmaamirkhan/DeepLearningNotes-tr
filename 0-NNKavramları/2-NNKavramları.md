# 📚 Yapay Sinir Ağlarının Kavramları

Yapay Sinir Ağlarının temel kavramları

## 🍭 Temel Sinir Ağı

<img src="../res/BasicANN.png" width="300"  />

> **Convention:** Giriş katmanı sayılmadığından görüntüdeki NN 2 kat NN olarak adlandırılır 📢❗

## 📚 Terimler

| Terim            | Açıklama      |
| ---------------  |---------------|
| Giriş Katmanı    | NN'nin girişlerini içeren katmandır |
| Gizli Katman     | Hesaplamalı işlemlerin yapıldığı katman |
| Çıkış Katmanı    | NN'nin son katmanı ve tahmin edilen değerin _ŷ_ üretilmesinden sorumludur |
| Nöron            | Bir matematik fonksiyonu için bir yer tutucu, girdilere bir fonksiyon uygular ve çıktı sağlar |
| Aktivasyon Fonksiyonu | Dönüşümler uygulayarak bir düğümün giriş sinyalini bir çıkış sinyaline dönüştüren bir fonksiyon |
| Shallow NN       | Az sayıda gizli katmana sahip NN (bir veya iki)  |
| Deep NN          | Çok sayıda gizli katmanı olan NN |
| n<sup>[l]</sup>  | _l_ katmanındaki nöron sayısı |


## 🧠 What does an artificial neuron do?
Girişinin ağırlıklı toplamını hesaplar, _bias_ ekler ve ardından bir aktivasyon fonksiyonu nedeniyle nöronun tetiklenip tetiklenmeyeceğine karar verir.
> My detailed notes on activation functions are [here](https://github.com/asmaamirkhan/DeepLearningNotes/tree/master/6-NNConcepts/3-ActivationFunctions.md) 👩‍🏫




## 👩‍🔧 Parametreler Boyut Kontrolü

| Parametre        | Boyut     |
| ---------------  |---------------|
| w<sup>[<i>l</i>]</sup>   |  (n<sup>[<i>l</i>]</sup>,n<sup>[<i>l-1</i>]</sup>) |
| b<sup>[<i>l</i>]</sup>   |  (n<sup>[<i>l</i>]</sup>,1) |
| dw<sup>[<i>l</i>]</sup>  |  (n<sup>[<i>l</i>]</sup>,n<sup>[<i>l-1</i>]</sup>) |
| db<sup>[<i>l</i>]</sup>  |  (n<sup>[<i>l</i>]</sup>,1) |


> Bu boyutların doğru olduğundan emin olmak, daha iyi ve hatasız 🐛 kodlar yazmamıza yardımcı olur.

## 🎈 Summary of Forward Propagation Process

|                  |                 |
| ---------------- | --------------- |
| **Giriş:**       |  a<sup>[<i>l</i>-1]</sup> |
| **Çıkış:**       |  a<sup>[<i>l</i>]</sup>, chache (z<sup>[<i>l</i>]</sup>) |

**Vektörize Edilmiş Denklemler:**

<img src="../res/formulas/ForwardProp.png" height="80"  />

## 🎈 Summary of Back Propagation Process

|                  |                 |
| ---------------- | --------------- |
| **Giriş:**       |  da<sup>[<i>l</i>]</sup> |
| **Çıkış :**      | da<sup>[<i>l</i>-1]</sup>, dW<sup>[<i>l</i>]</sup>, db<sup>[<i>l</i>]</sup> |

**Vektörize Edilmiş Denklemler:**

<img src="../res/formulas/BackProp1.png" height="30"  />
<br>
<img src="../res/formulas/BackProp2.png" height="50"  />
<br>
<img src="../res/formulas/BackProp3.png" height="50"  />
<br>
<img src="../res/formulas/BackProp4.png" height="30"  />

## ➰➰ To Put Forward Prop. and Back Prop. Together

<img src="../res/ForBackSummary.png" width="500"  />

> 😵🤕

## ✨ Parametreler vs Hiper-parametreler

**Parametreler:**
* W<sup>[<i>1</i>]</sup>, W<sup>[<i>2</i>]</sup>, W<sup>[<i>3</i>]</sup>
* b<sup>[<i>1</i>]</sup>, b<sup>[<i>2</i>]</sup>
* ......


**Hiper-parametreler:**

* Öğrenme hızı
* İterasyon sayısı
* Gizli katmanların sayısı
* gizli birimlerin sayısı
* Aktivasyon Fonksiyonunun Seçimi 
* ......

> Hiperparametrelerin parametreleri kontrol ettiğini söyleyebiliriz 🤔