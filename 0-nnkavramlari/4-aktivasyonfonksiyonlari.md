# 💥 Yapay Sinir Ağlarında Aktivasyon Fonksiyonları

Aktivasyon Fonksiyonlarının temel amacı, bir A-NN'deki bir düğümün giriş sinyalini bir dönüşüm uygulayarak bir çıkış sinyaline dönüştürmektir. Bu çıkış sinyali şimdi yığındaki bir sonraki katmana girdi olarak kullanılır.

## 📃 Aktivasyon Fonksiyonlarının Türleri

| Fonksiyon | Açıklama |
| :--- | :--- |
| Lineer Aktivasyon Fonksiyonu | Verimsiz, regresyonda kullanılır |
| Sigmoid Fonksiyonu | İkili sınıflandırma problemlerinde çıktı katmanı için iyi |
| Tanh Fonksiyonu | Sigmoid fonksiyonundan daha iyidir |
| Relu Fonksiyonu ✨ | Gizli katmanlar için varsayılan seçim |
| Leaky Relu Fonksiyonu | Relu'dan birazcık daha iyi, Relu daha popüler |

### 📈 Lineer Aktivasyon Fonksiyonu \(Birim Fonksiyonu\)

**Formül:**

$$linear(x)=x$$

**Grafik:**

![](../.gitbook/assets/linearactivationgraph.png)

> Regresyon problemlerindeki çıktı katmanında kullanılabilir.

### 🎩 Sigmoid Fonksiyonu

**Formül:**

$$sigmoid(x)=\frac{1}{1+exp(-x)}$$

**Grafik:**

![](../.gitbook/assets/sigmoidgraph.png)

### 🎩 Tangent Fonksiyonu

Neredeyse her zaman sigmoid fonksiyonundan üstündür

**Formül:**

$$tanh(x)=\frac{2}{1+e^{-2x}}-1$$

> Sigmoid fonksiyonunun kaydırılmış versiyonu 🤔

**Grafik:**

![](../.gitbook/assets/tanhgraph.PNG)

> Aktivasyon fonksiyonları farklı katmanlar için farklı olabilir, örneğin, gizli katman için _tanh_ fonksiyonunu, çıkış katmanı için _sigmoid_ fonksiyonunu kullanabiliriz

### 🙄 Tanh ve Sigmoid Dezavantajları

Eğer z çok büyükse veya çok küçükse, bu fonksiyonun türevi _\(veya eğimi\)_ çok küçük olur \(0'a yakın olur\) ve bu, gradient descent'i yavaşlatabilir. 🐢

### 🎩 Doğrultulmuş Doğrusal Aktivasyon Ünitesi \(Relu ✨\)

Başka ve çok popüler bir seçenek

**Formül:**

$$
relu(x)=\left\{\begin{matrix}
0, if x<0
\\
x,if x\geq0
\end{matrix}\right.
$$

**Grafik:**

![](../.gitbook/assets/relugraph.png)

Yani türev, z pozitif olduğunda 1 ve z negatif olduğunda 0'dır.

> _Dezavantaj:_ z negatif iken türev=0'dır 😐

### 🎩 Sızdıran Relu

**Formül:**

$$
leaky\_relu(x)=\left\{\begin{matrix}
0.01x, if x<0
\\
x,if x\geq0
\end{matrix}\right.
$$

**Grafik:**

![](../.gitbook/assets/leakyrelugraph.png)

**Veya:** 😛

![](../.gitbook/assets/leakyrelugraphmeme.png)

### 🎀 Relu'nun Avantajları

* Z uzayının çoğu, aktivasyon fonksiyonunun türevi, 0'dan çok farklıdır.
* NN tanh veya sigmoid kullanmaya göre çok daha hızlı öğrenecektir. 

## 🤔 NN'lerin neden doğrusal olmayan aktivasyon fonksiyonlara ihtiyacı var?

Peki, eğer lineer işlevi kullanırsak, NN sadece girişin lineer bir fonksiyonunu çıkarır, yani NN'nin kaç katmanı olursa olsun 🙄, yaptığı tek şey sadece lineer bir fonksiyonu hesaplamaktır 😕

> ❗ İki doğrusal fonksiyonun kompozisyonunun kendisinin doğrusal bir fonksiyon olduğunu unutma

## 👩‍🏫 Aktivasyon Fonksiyonu Seçmek İçin Kurallar

* Eğer çıkış 0 veya 1 ise \(ikili sınıflandırma\) ➡ _sigmoid_ çıkış katmanı için uygundur
* Diğer bütün birimler için ➡ _Relu_ ✨ 

> Aktivasyon fonksiyonu için Relu'nun varsayılan seçenek olduğunu söyleyebiliriz

Not:

> Bu fonksiyonlardan hangisinin en iyi sonucu verdiğinden emin değil isen 😵, hepsini dene 🤕 ve farklı doğrulama setleri üzerinden değerlendir ve hangisinin daha iyi çalıştığını gör ve kullan 🤓😇

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/0-nnconcepts/4-activationfunctions)

## 🧐 Daha Fazla Oku

* [Which Activation Function Should I Use? \(Siraj Raval ✨\)](https://www.youtube.com/watch?v=-7scQpJT7uo)
* [Activation Functions in Neural Networks](https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6)
* [Understanding Activation Functions in Neural Networks](https://medium.com/the-theory-of-everything/understanding-activation-functions-in-neural-networks-9491262884e0)

