---
description: 🚪 Tensorflow ve Keras ile bilgisayar görüşü problemlerini çözmeye giriş 
---
# 🚪 Bilgisayar Görüşüne Giriş

## 👗 MNIST Nedir?
MNIST'in açılımı: **(Modified National Institute of Standards and Technology database)**

* 🔎 Fashion-MNIST 60.000 örnek eğitim setinden ve 10.000 örnek test setinden oluşur
* 🎨 Türleri:
  * 🔢 MNIST: el yazısı rakamlar için
  * 👗 Fashion-MNIST: moda için (kıyafet)
* 📃 Özellikler:
  * 🌚 Gri tonlama (siyah-beyaz)
  * 28x28 px
  * 10 farklı kategori
  * [Repo](https://github.com/zalandoresearch/fashion-mnist)

## 📚 Önemli Terim
| Terim           | Açıklama   |
| --------------- |---------------|
| ➰ Sequential      | Bu sinir ağında bir katmanlar **dizisi** tanımlar |
| ⛓ Flatten          | Yassılaştır sadece o kareyi alır ve onu 1 boyutlu bir kümeye dönüştürür (giriş katmanı için kullanılır) |
| 🔷 Dense           | Bir nöron katmanı ekler |
| 💥 Activation Function | Doğrusal olmayan özellikleri ağa tanıtan bir formül |
| ✨ Relu            | If X>0 return X, else return 0 kuralına sahip bir aktivasyon fonksiyonudur |
| 🎨 Softmax         | Bir dizi değer alan ve en büyüğünü seçen bir aktivasyon fonksiyonudur |


> Aktivasyon fonksiyonunun temel amacı, bir NN'deki bir düğümün giriş sinyalini bir çıkış sinyaline dönüştürmektir. Bu çıkış sinyali şimdi yığındaki bir sonraki katmana girdi olarak kullanılır 💥

## 💫 Performans Hakkında Notlar
* MNIST'deki değerler 0-255 arasındadır ancak sinir ağları normalleştirilmiş verilerle daha iyi çalışır, bu nedenle her değeri 255'e bölebiliriz, böylece değerler 0,1 arasındadır.
* Eğitim sürecini durdurmak için birden fazla kriter var, _epoch_ sayısını ya da eşiğini ya da her ikisini birden belirleyebiliriz.
  * Epochs: iterasyon sayısı
  * Eşik: her iterasyon sonrasında accuracy veya loss için bir eşik değeri
  * Eşik değeri ve maksimum epoch sayısı

> Her epoch sonunda, accuracy'yi Callbacks ile kontrol edebiliriz 💥

## 👩‍💻 Kodlarım
- [👗 Fashion MNIST](./0-Fashion-MNIST.ipynb)
- [1️⃣ Digit MNIST](./1-DIGIT-MNIST.ipynb)

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/2-intro2computervision)

## 🧐 Referanslar
* [Official Documentation of Keras](https://keras.io/)
* [More About Activation Functions](https://keras.io/activations/)
