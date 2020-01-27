# 🔎 Esas Problem
Aşağıda verilen veri seti için:  

$$[(x^{1},y^{1}), (x^{2},y^{2}), ...., (x^{m},y^{m})]$$

Bizim amacımız:

$$\hat{y}^{(i)} \approx y^{(i)}$$


## 📚 Temel Kavramlar ve Notasyonlar

| Kavram          | Açıklama      |
| --------------- |---------------|
| `m`             | Veri setindeki örnek sayısı   |
| $$x^{(i)}$$     | Veri setindeki `i`'inci örnek  |
| `ŷ`             | Tahmin edilen çıktı |
| Kayıp Fonksiyonu _Loss Function_ `𝓛(ŷ, y)` | **Tek** bir örnek için hata hesaplama fonksiyonu |
| Cost Function _Maliyet Fonksiyonu_ `𝙹(w, b)` | Tüm eğitim setinin kayıp fonksiyonlarının ortalaması  |
| Konveks Fonksiyon | Tek bir yerel değere sahip bir fonksiyon |
| Konveks Olmayan Fonksiyon | Çok sayıda farklı yerel değere sahip bir fonksiyon |
| Gradyan İnişi _Gradient Descent_ | Maliyet Fonksiyonunun global değerini bulmak için kullanılan iteratif bir optimizasyon yöntemidir |

> Başka bir deyişle: Maliyet Fonksiyonu `w` ve `b` veri seti için ne kadar iyi olduklarını ölçer. Ona dayanarak, en iyi `w` ve `b` değerleri, `𝙹(w, b)`'ı mümkün olduğunca küçülten değerlerdir 

## 📉 Gradyan İnişi 
Genel Formül:

$$w:=w-\alpha\frac{dJ(w,b)}{dw}$$

$$b:=b-\alpha\frac{dJ(w,b)}{dw}$$


> `α` _(alpha)_ **Öğrenme Hızı**'dir (Learning Rate) 

## 🥽 Öğrenme Hızı (Learning Rate)
Model ağırlıkları her güncellendiğinde karşılık gelen tahmini hata nedeniyle her Gradyan İnişi tekrarının adımının boyutunu belirleyen pozitif bir skalardır, bu nedenle bir sinir ağı modelinin ne kadar hızlı veya yavaş bir problemi öğrendiğini kontrol eder.

### 🎀 İyi Öğrenme Hızı

<img src="../res/GoodSGD.gif" width="300"  />

### 💢 Kötü Öğrenme Hızı

<img src="../res/BadSGD.gif" width="300"  />

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/0-nnconcepts/1-generalconcepts)

## 🧐 Referanslar
* [Introduction to Artificial Neural Networks (ANN)](https://searchenterpriseai.techtarget.com/definition/neural-network)
* [More on Learning Rate](https://machinelearningmastery.com/learning-rate-for-deep-learning-neural-networks/)