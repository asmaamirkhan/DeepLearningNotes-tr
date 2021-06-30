# 🔎 Esas Problem

Aşağıda verilen veri seti için:

$$[(x^{1},y^{1}), (x^{2},y^{2}), ...., (x^{m},y^{m})]$$

Bizim amacımız:

$$\hat{y}^{(i)} \approx y^{(i)}$$

## 📚 Temel Kavramlar ve Notasyonlar

| Kavram | Açıklama |
| :--- | :--- |
| `m` | Veri setindeki örnek sayısı |
| $$x^{(i)}$$ | Veri setindeki `i`'nci örnek |
| `ŷ` | Tahmin edilen çıktı |
| Kayıp Fonksiyonu _Loss Function_ `𝓛(ŷ, y)` | **Tek** bir örnek için hata hesaplama fonksiyonu |
| Cost Function _Maliyet Fonksiyonu_ `𝙹(w, b)` | Tüm eğitim setinin kayıp fonksiyonlarının ortalaması |
| Konveks Fonksiyon | Tek bir yerel değere sahip fonksiyon |
| Konveks Olmayan Fonksiyon | Çok sayıda farklı yerel değere sahip fonksiyon |
| Gradyan İnişi _Gradient Descent_ | Maliyet Fonksiyonunun global değerini bulmak için kullanılan iteratif bir optimizasyon yöntemidir |

> Başka bir deyişle: Maliyet Fonksiyonu `w` ve `b` veri seti için ne kadar iyi olduklarını ölçer. Ona dayanarak, en iyi `w` ve `b` değerleri, `𝙹(w, b)`'ı mümkün olduğunca küçülten değerlerdir

## 📉 Gradyan İnişi

Gradyan inişi, türevlenebilir bir fonksiyonun yerel minimumunu bulmak için birinci dereceden yinelemeli bir optimizasyon algoritmasıdır. Buradaki ana fikir, mevcut noktada fonksiyonun gradyanının (veya yaklaşık gradyanının) zıt yönünde tekrarlanan adımlar atmaktır, çünkü bu en dik iniş yönüdür. Diğer taraftan, gradyan yönünde adım atmak, bu fonksiyonun yerel bir maksimumuna yol açacaktır; bu prosedür de gradyan yükselişi olarak bilinir.

Genel Formül:

$$w:=w-\alpha\frac{dJ(w,b)}{dw}$$

$$b:=b-\alpha\frac{dJ(w,b)}{dw}$$

> `α` _\(alpha\)_ **Öğrenme Hızı**'dir \(Learning Rate\)

## 🥽 Öğrenme Hızı \(Learning Rate\)

Model ağırlıkları her güncellendiğinde karşılık gelen tahmini hata nedeniyle her Gradyan İnişi tekrarının adımının boyutunu belirleyen pozitif bir skalardır, bu nedenle bir sinir ağı modelinin bir problemi ne kadar hızlı veya yavaş öğrendiğini kontrol eder.

### 🎀 İyi Öğrenme Hızı

![](../.gitbook/assets/GoodSGD.gif)

### 💢 Kötü Öğrenme Hızı

![](../.gitbook/assets/BadSGD.gif)

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/0-nnconcepts/1-generalconcepts)

## 🧐 Referanslar

* [Introduction to Artificial Neural Networks \(ANN\)](https://searchenterpriseai.techtarget.com/definition/neural-network)
* [More on Learning Rate](https://machinelearningmastery.com/learning-rate-for-deep-learning-neural-networks/)
* [Gradient descent - Wikipedia](https://en.wikipedia.org/wiki/Gradient_descent)

