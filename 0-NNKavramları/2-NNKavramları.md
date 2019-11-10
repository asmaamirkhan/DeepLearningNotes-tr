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


## 🧠 Yapay bir nöron ne yapar?
It calculates a _weighted sum_ of its input, adds a bias and then decides whether it should be _fired_ or not due to an activaiton function
> My detailed notes on activaiton functions are [here](https://github.com/asmaamirkhan/DeepLearningNotes/tree/master/6-NNConcepts/3-ActivationFunctions.md) 👩‍🏫




## 👩‍🔧 Parameters Dimension Control

| Parameter        | Dimension     |
| ---------------  |---------------|
| w<sup>[<i>l</i>]</sup>   |  (n<sup>[<i>l</i>]</sup>,n<sup>[<i>l-1</i>]</sup>) |
| b<sup>[<i>l</i>]</sup>   |  (n<sup>[<i>l</i>]</sup>,1) |
| dw<sup>[<i>l</i>]</sup>  |  (n<sup>[<i>l</i>]</sup>,n<sup>[<i>l-1</i>]</sup>) |
| db<sup>[<i>l</i>]</sup>  |  (n<sup>[<i>l</i>]</sup>,1) |


> Making sure that these dimensions are true help us to write better and bug-free :bug: codes

## 🎈 Summary of Forward Propagation Process

|                  |                 |
| ---------------- | --------------- |
| **Input:**       |  a<sup>[<i>l</i>-1]</sup> |
| **Output:**      |  a<sup>[<i>l</i>]</sup>, chache (z<sup>[<i>l</i>]</sup>) |

**Vectorized Equations:**

<img src="../res/formulas/ForwardProp.png" height="80"  />

## 🎈 Summary of Back Propagation Process

|                  |                 |
| ---------------- | --------------- |
| **Input:**       |  da<sup>[<i>l</i>]</sup> |
| **Output:**      | da<sup>[<i>l</i>-1]</sup>, dW<sup>[<i>l</i>]</sup>, db<sup>[<i>l</i>]</sup> |

**Vectorized Equations:**

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

## ✨ Parameters vs Hyperparameters

**Parameters:**
* W<sup>[<i>1</i>]</sup>, W<sup>[<i>2</i>]</sup>, W<sup>[<i>3</i>]</sup>
* b<sup>[<i>1</i>]</sup>, b<sup>[<i>2</i>]</sup>
* ......


**Hyperparameters:**

* Learning rate
* Number of iterations
* Number of hidden layers
* Number of hidden units
* Choice of activation function
* ......

> We can say that hyperparameters control parameters 🤔