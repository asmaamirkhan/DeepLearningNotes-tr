# 🕸 CNN'lerin Popüler Uygulamaları

| Uygulama | Açıklama |
| :--- | :--- |
| 🧒👧 Yüz Doğrulama | Verilen görüntünün ve ID'nin aynı kişiye ait olup olmadığını bilmek |
| 👸 Yüz Tanıma | Giriş yüzü görüntüsüne ID atama |
| 🌠 Sinirsel Stil Aktarımı | Belirli bir görüntünün stilini öğrenerek bir görüntüyü diğerine dönüştürme |

## 🧒👧 Face Verification

### 🙌 Karşılaştırma

| Terim | Soru | Giriş | Çıkış | Problem Türü |
| :--- | :--- | :--- | :--- | :--- |
| 🧒👧 Yüz Doğrulama | Bu aranan kişi mi? 🕵️‍♂️ | Face image / ID | True / False | 1:1 |
| 👸 Yüz Tanıma | Bu kişi kimdir? 🧐 | Face image | `K` yüzünüz DB'deki ID'si | 1:K |

## 🤸‍♀️ Çözüm Yaklaşımı

### 🤳 One Shot Learning

**Bir** örnekten \(veritabanında sahip olduğumuz\) kişiyi tekrar tanımayı öğrenmek

### 🖇 Süreç

* Giriş resmini al
* DB'deki yüzlere ait olup olmadığını kontrol et

  > \(Söyelemesi kolay 🤭\)

### 👓 Nasıl Kontrol Edeyim?

Giriş görüntüsü ile veritabanındaki görüntü arasındaki **benzerliği** hesaplamamız gerekir, bu nedenle:

* ⭕ Öyle bir fonksiyon kullan ki; 
  * similarity\(img\_in, img\_db\) = some\_val
* 👷‍♀️ Eşik değeri belirle
* 🕵️‍♀️ Eşik değerini kontrol et ve çıkışı belirle

### 🤔 Benzerlik fonksiyonu ne olabilir?

#### 🔷 Siamese Ağı

Yüz Doğrulama bağlamında kullanılan bir CNN, iki görüntüyü girdi olarak alır, konvolüsyonlar uyguladıktan sonra her görüntüden bir özellik vektörü hesaplar, aralarındaki farkı hesaplar ve daha sonra çıkışı verir.

> Başka bir deyişle: verilen resmi kodluyor

#### 👀 Görselleştirme

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/siameseconcept.png)

Mimarisi:

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/siamesearch.png)

### 👩‍🏫 Nasıl Eğitebilirim?

Ağı bir _çapa \(anchor\)_ \(baz\) resim _A_ alarak ve hem pozitif bir _P_ hem de negatif bir _N_ örneği ile karşılaştırarak eğitebiliriz. Böylece:

* 🚧 Çapa resmi ile **pozitif** resim arasındaki benzeşmezlik \(dissimilarity\) **düşük** olmalıdır
* 🚧 Çapa resmi ile **negatif** resim arasındaki benzeşmezlik \(dissimilarity\) **yüksek** olmalıdır

Yani:

$$L=max(d(a,p)-d(a,n)+margin, 0)$$

> Kayıp denklemine başka bir **hiper-parametre** olan **kenar payı** _margin_ adlı değişken eklenir. Kenar payı, benzeşmezliğin ne kadar olması gerektiğini, yani eğer margin = 0.2 ve d\(a, p\) = 0.5 ise, d \(a, n\) en az 0.7'ye eşit olmalıdır. Kenar payı, iki görüntüyü daha iyi ayırt etmemize yardımcı oluyor 🤸‍♀️

Bu nedenle, bu kayıp fonksiyonunu kullanarak:

* 👩‍🏫 Gradyanları hesaplayabiliriz ve gradyanların yardımıyla,
* 👩‍🔧 Siamese ağının ağırlıklarını ve yanlılıklarını güncelleyebiliriz. 

Ağı eğitmek için de:

* 👩‍🏫 Çapa görüntüsü alıyoruz ve pozitif ve negatif görüntüleri rastgele örnekleriz ve kayıp fonksiyonunu hesaplarız
* 🤹‍♂️ Gradyanları güncelliyoruz

## 🌠 Sinirsel Stil Aktarımı \(Neural Style Transfer\)

Bir içerik görüntüsü **C** \(content\) ve stil görüntüsü **S** \(style\) vererek bir **G** görüntüsü oluşturma

### 👀 Göreslleştirme

![](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/c9ee03241414e86f59a83b656e48738150bfa1bb/.gitbook/assets/nstyletransfer.png)

Bu nedenle **G**'yi üretmek için NN'miz **S**'nin özelliklerini öğrenmeli ve **C**'ye uygun filtreler uygulamalı.

### 👩‍🎓 Metodoloji

Genellikle istenen performansı elde etmek için NN'nin parametrelerini _-ağırlıklarını ve yanlılıkların-_ optimize ediyoruz, burada Sinirsel Stil Aktarımı'nda rastgele piksel değerlerinden oluşan boş bir görüntüden başlıyoruz ve görüntünün piksel değerlerini değiştirerek bir maliyet maliyet fonksiyonunu optimize ediyoruz 🧐

Başka bir deyişle, biz:

* ⭕ **Rastgele** piksellerden oluşan bir resimle başlıyoruz
* 👩‍🏫 Bir maliyet _J_ fonksiyonunu tanımlıyoruz
* 👩‍🔧 Maliyet fonksiyonunu azaltmak için iteratif bir şekilde pikselleri güncelliyoruz

> Uzun lafın kısası: NN'leri eğitirken ağırlıkları ve bias'ları güncelleriz, ancak stil aktarımında ağırlıkları ve bias'ları sabit tutarız ve bunun yerine imajımızı güncelleriz 🙌

#### ⌚ Maliyet Fonksiyonu

_J_'yi aşağıdaki şekilde tanımlayabiliriz:

$$J(G)=\alpha J_{Content}(C,G)+\beta J_{Style}(S,G)$$

Açıklama:

* $$J_{Content}$$ G ie C arasındaki benzerliği ifade eder
* $$J_{Style}$$ G ile S arasındaki benzerliği ifade eder
* _α_ ve _β_ hiper-parametrelerdir

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/3-cnnconcepts/6-applications)

