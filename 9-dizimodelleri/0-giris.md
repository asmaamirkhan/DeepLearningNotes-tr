---
description: ⛓ Dizi Modellerinin Temelleri
---

# 🌱 Giriş

## ⛓ Genel Olarak

* Diziler, her örneğin bir veri **serisi** olarak görülebildiği veri yapılarıdır, örneğin 🧐:

| Görev | Giriş **X** | Çıkış **Y** | Tür |
| :--- | :--- | :--- | :--- |
| 💬 Konuşma tanıma | Dalga dizisi | Metin dizisi | Sequence-to-Sequence |
| 🎶 Müzik Üretme | Hiç / Tam sayı | Dalga dizisi | One-to\_Sequence |
| 💌 Duygu Sınıflandırması | Metin dizisi | Tamsayı Değerlendirmesi \(1➡5\) | Sequence-to-One |
| 🔠 Makine Çevirisi | Metin dizisi | Metin dizisi | Sequence-to-Sequence |
| 📹 Video Etkinlik Tanıma | Video Çerçeveleri | Etiket | Sequence-to-One |

> * Etiketlenmiş giriş verileri **X** ve Çıkış **Y** olduğundan bütün bu görevler gözetimli öğrneme olarak tanımlanabilir👩‍🏫
> * Sequence-to-Sequence görevlerindeki giriş ve çıkış dizilerinin boyutları farklı olabilir ❗

## 🤔 Neden Dizi Modellerine İhtiyaç Duyulur?

* Makine öğrenmesi algoritmaları genellikle metin girişinin sabit uzunlukta bir vektör olarak temsil edilmesini gerektirir 🙄
* Bu nedenle, dizileri modellemek için aşağıdakileri yapabilen özel bir öğrenme yaklaşımına ihtiyacımız var:
  * ✔ Değişen uzunluklara sahip dizilere uygun
  * ✔ Dizi sırasını koruyabilen
  * ✔ Girdi verilerini çok kısa kesmek yerine uzun vadeli bağımlılıkları takip eden
  * ✔ Parametreleri dizi boyunca paylaşabilen \(Dizi boyunca eskiyi silip **tekrar** öğrenmeyen\)

## 👩‍💻 Kodlarım

* [💬 Metin sınıflandırma](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/e17776b1b8771d34c5ad3be2b028a41ce37fe32c/9-DiziModelleri/A-TextClassification.ipynb)

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/9-sequencemodels/0-introduction)

