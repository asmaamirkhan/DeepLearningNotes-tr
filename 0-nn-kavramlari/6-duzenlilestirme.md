# 👩‍🔧 NN Düzenlileştirme \(Regularization\)

Kısaca: Aşırı öğrenmeyi önleyen -ve varyansı- azaltan bir tekniktir

## 🙄 Problem

Aşırı öğrenme durumunda, modelimiz eğitim verilerindeki ayrıntıları ve gürültüyü çok iyi öğrenmeye çalışır, bu da sonuçta görülmeyen verilerde \(test seti\) düşük performansa neden olur.

Aşağıdaki grafik, bu durumu daha iyi açıklar:

![](../.gitbook/assets/Overfitting.png)

## 👩‍🏫 Düzenlileştirme Daha İyi Tanımı

Modelin daha iyi genelleşmesi için öğrenme algoritmasında ufak değişiklikler yapan bir tekniktir. Bu da modelin görülmeyen veriler üzerindeki performansını artırmaktadır.

## 🔨 Düzenlileştirme Teknikleri

### 🔩 L2 Düzenlileştirmesi \(Weight Decay\)

En yaygın düzenlileştirme türüdür, aşağıdaki formüle göre uygulanır

$$J=Loss+\frac{\lambda}{2m}-\sum ||w||^{2}$$

Burada, lambda düzenlileştirme parametresidir. Daha iyi sonuçlar için değeri optimize edilmiş olan **hiper-parametredir**. L2 düzenlileştirmesi, ağırlıkları sıfıra \(ancak tam olarak sıfıra değil\) indirgemeye zorladığı için ağırlık azalması _\(Weight decay\)_ olarak da bilinir.

### 🔩 Sönümleme \(Dropout\)

Bazı sinirleri **rastgele** belirli bir oranda elimine ederek başka bir düzenlileştirme yöntemidir.

> Basitçe: Her p olasılığına sahip düğüm için, geri yayılma sırasında giriş veya çıkış ağırlıklarını güncellemiyoruz \(Yani onu düşürüyoruz 😅\)

Daha iyi görselleştirme:

![](../.gitbook/assets/NNWithoutDropout.JPG)

![](../.gitbook/assets/NNWithDropout.JPG)

> Eleme işleminden önce ve sonra bir NN

Genellikle bilgisayarlı görüşte kullanılır, ancak olumsuz yönü maliyet fonksiyonu _J_'nin artık iyi tanımlanmamasıdır.

### 🤡 Veri Artırma \(Data Augmentation\)

Aşırı öğrenmeyi azaltmanın en basit yolu, eğitim verilerinin boyutunu artırmaktır, daha fazla veri elde etmek çok maliyetli olduğu için her zaman mümkün değildir, ancak bazen verilerimize dayanarak verilerimizi artırabiliriz, örneğin:

* Resimler üzerinde dönüşüm yapmak veri setimizi büyütebilir

### 🛑 Erken Durdurma

Eğitim setinin bir bölümünü doğrulama seti olarak tuttuğumuz bir tür çapraz doğrulama stratejisidir. Doğrulama setindeki performansın kötüye gittiğini gördüğümüzde, modelin eğitimini derhal durdururuz. Bu _Erken Durma_ olarak bilinir.

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/0-nnconcepts/6-regularization)

## 🧐 Daha Fazla Oku

* Uzun Lafın Kısası 😅: [Overfitting and Regularization in Neural Networks](https://medium.com/@rameshkjes/overfitting-and-regularization-in-neural-networks-d3d996e33c3)

