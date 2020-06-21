# 🎈 NN Uygulama İp Uçları

## 📈 Veri Normalleştirme

_Veri Hazırlama_'nın bir

* Elimizde, hepsi pozitif ya da negatif olan bir özelliğe var ise, bu, içeren katmandaki düğümler için öğrenmeyi zorlaştıracaktır. Sigmoid aktivasyon fonksiyonunu izleyenler gibi _zikzak_ yapmak zorunda kalacaklar. 
* Verilerimizi sıfıra yakın bir ortalama olacak şekilde dönüştürürsek, hem pozitif değerlerin hem de negatif değerlerin olduğundan emin olacağız.

**Formül:**

$$normalized=\frac{x_{i}-\mu }{\sigma}$$

> Fayda: Bu, Maliyet Fonksiyonunun _J_ optimizasyonunu hem daha hızlı hem de daha kolay yapar 😋

## 🚩 NN'i uygulamadan önce iyi düşünülmesi gerekenler

Katman sayısı, gizli birimlerin sayısı, öğrenme hızı, aktivasyon fonksiyonları...

İlk seferinde hepsini doğru seçmek çok zor, bu yüzden iteratif bir süreç olarak ele almamız lazım.

Fikir ➡ Kod ➡ Deney ➡ Fikir 🔁

> Yani burada mesele, bu döngüde nasıl verimli bir şekilde dolaşılacağıdır 🤔

## 👷‍♀️ Train / Dev / Test Ayırması

İyi bir değerlendirme için veri setini aşağıdaki gibi bölmek iyidir:

| Kısım | Açıklama |
| :--- | :--- |
| Eğitim Seti _\(Training Set\)_ | Modeli eğitmek için kullanılır |
| Doğrulama Seti _\(Development \(Validation\) Set\)_ | Model hiper-parametrelerini ayarlarken yanlılıksız _\(unbiased\)_ bir değerlendirme yapmak için kullanılır |
| Test Seti | **Son** modelin yanlılıksız bir değerlendirmesini sağlamak için kullanılır |

### 🤓 Eğitim Seti

Modeli eğitmek için kullandığımız gerçek veri seti \(NN durumunda ağırlık ve yanlılık\).

> Model bu verileri **görüyor** ve **öğreniyor** 👶

### 😐 Doğrulama Seti

Model hiper-parametrelerini ayarlarken eğitim setine uygun bir modelin yanlılıksız bir değerlendirmesini sağlamak için kullanılan veri örneği. Doğrulama setindeki beceri, model konfigürasyonuna dahil edildiğinden değerlendirme daha yanlılıklı hale gelir.

> Model bu verileri **görüyor**, ancak bundan asla **öğrenmiyor** 👨‍🚀

### 🧐 Test Seti

Eğitim setine uygun son bir modelin yanlıksız bir değerlendirmesini sağlamak için kullanılan veri örneği. Modeli değerlendirmek için kullanılan altın standardı sağlar 🌟.

**Uygulama Notu:** Test seti, gerçek dünyada kullanıldığında modelin karşılaşacağı çeşitli sınıfları kapsayan dikkatlice örneklenmiş verileri içermelidir 🚩🚩🚩❗❗❗

> Sadece model tamamen eğitildiğinde kullanılır 👨‍🎓

## 😕 Yanlılık \(Bias\) / Varyans \(Variance\)

### 🕹 Yanlılık

**Yanlılık** gerçek değerlerden tahmin edilen değerlerin ne kadar uzak olduğunu gösteren bir kavramdır. Ortalama öngörülen değerler gerçek değerlerden uzaksa, yanlılık yüksektir.

> Yüksek yanlılığa sahip olmak, modelin çok basit olduğunu ve verilerin karmaşıklığını yakalamadığını **Eksik öğrendiğini** _\(underfitting\)_ ve bu nedenle verilere uygun olmadığını gösterir. 🤕

### 🕹 Varyans

* Varyans, belirli bir veri noktası için model tahmininin değişkenliği veya bize verilerimizin yayılmasını söyleyen bir değerdir.
* Varyansı yüksek olan model, daha önce görmediği verilerde genelleme yapamamaktadır.

> Yüksek varyansa sahip olmak algoritmanın eğitim verilerindeki rastgele gürültüyü modellediğini ve verilerin üstüne **aşırı öğrendiğini** _\(overfitting\)_ gösterir. 🤓

## 👀 Varyans / Yanlılık Görselleştirilmesi

![](../.gitbook/assets/fittings.png)

## ↘ Modeli Uygularken..

İstenilen performansı elde edemezsek, modelimizi geliştirmek için şu soruları sormamız gerekir:

> Aşağıdaki çözümlerin performansını doğrulama seti üzerinden kontrol ediyoruz

1. Yüksek yanlılık var mıdır? varsa, bu bir eğitim problemidir, yapılabilecekler:
   * Daha büyük ağı dene
   * Daha uzun eğit
   * Daha iyi optimizasyon algoritması dene
   * Başka bir NN mimarisini dene

> Bunun **yapısal** bir sorun olduğunu söyleyebiliriz 🤔

1. Yüksek varyans var mıdır? varsa, doğrulama seti performans problemidir, yapılabilecekler:
   * Daha fazla veri kullan
   * Düzenlileştirme _\(Regularization\)_ yap
     * L2, dropout, data augmentation

> Belki veri ya da algoritmik bir problem olduğunu söyleyebiliriz. 🤔

1. Yüksek varyans veya yüksek yanlılık yok mu?

> TADAAA işimiz bitti 🤗🎉🎊

## 🌞 Yazının Aslı

* [Burada 🐾](https://dl.asmaamir.com/0-nnconcepts/5-practicalaspects)

## 🧐 Referanslar

* [About Train, Validation and Test Sets in Machine Learning](https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7)
* [Bias and Variance in Machine Learning](https://medium.com/datadriveninvestor/bias-and-variance-in-machine-learning-51fdd38d1f86)

