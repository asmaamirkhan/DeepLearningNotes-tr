# 🎈 NN Uygulama İp Uçları

## 📈 Veri Normalleştirme
_Veri Hazırlama_'nın bir

- Elimizde, hepsi pozitif ya da negatif olan bir özelliğe var ise, bu, içeren katmandaki düğümler için öğrenmeyi zorlaştıracaktır. Sigmoid aktivasyon fonksiyonunu izleyenler gibi _zikzak_ yapmak zorunda kalacaklar. 
- Verilerimizi sıfıra yakın bir ortalama olacak şekilde dönüştürürsek, hem pozitif değerlerin hem de negatif değerlerin olduğundan emin olacağız.

**Formül:**

<img src="../res/formulas/NormalizedData.png" height="30"  />

> Fayda: Bu, Cost function'ın  _J_ optimizasyonunu hem daha hızlı hem de daha kolay yapar 😋

## 🚩 NN'i uygulamadan önce iyi düşünülmesi gerekenler
Katman sayısı, gizli birimlerin sayısı, öğrenme hızı, aktivasyon fonksiyonları... 

İlk seferinde hepsini doğru seçmek çok zor, bu yüzden iteratif bir süreç olarak ele almamız lazım.

Fikir ➡ Kod ➡ Deney ➡ Fikir 🔁

> Yani burada mesele, bu döngüde nasıl verimli bir şekilde dolaşılacağıdır 🤔

## 👷‍♀️ Train / Dev / Test Ayırması
İyi bir değerlendirme için veri setini aşağıdaki gibi bölmek iyidir:

| Kısım                        | Açıklama                                                                   |
| ---------------------------- | -------------------------------------------------------------------------- |
| Training Set                 |  Modeli eğitmek için kullanılır                                            |
| Development (Validation) Set |  Model hiperparametrelerini ayarlarken tarafsız _(unbiased)_ bir değerlendirme yapmak için kullanılır |
| Test Set                     |  **Son** modelin tarafsız _(unbiased)_ bir değerlendirmesini sağlamak için kullanılır                 |

### 🤓 Training Set
Modeli eğitmek için kullandığımız gerçek veri seti (NN durumunda ağırlık ve _bias_).

> Model bu verileri **görüyor** ve **öğreniyor** 👶

### 😐 Validation (Development) Set
Model hiperparametrelerini ayarlarken eğitim veri setine uygun bir modelin tarafsız _(unbiased)_ bir değerlendirmesini sağlamak için kullanılan veri örneği. Doğrulama veri setindeki beceri, model konfigürasyonuna dahil edildiğinden değerlendirme daha önyargılı _(biased)_ hale gelir.

> Model bu verileri **görüyor**, ancak bundan asla **öğrenmiyor** 👨‍🚀

### 🧐 Test Set
Eğitim veri setine uygun son bir modelin tarafsız _(unbiased)_ bir değerlendirmesini sağlamak için kullanılan veri örneği. Modeli değerlendirmek için kullanılan altın standardı sağlar 🌟.

**Uygulama Notu:** Test seti, gerçek dünyada kullanıldığında modelin karşılaşacağı çeşitli sınıfları kapsayan dikkatlice örneklenmiş verileri içermelidir 🚩🚩🚩❗❗❗

> Sadece model tamamen eğitildiğinde kullanılır 👨‍🎓


## 😕 Bias / Variance

### 🕹 Bias
**Bias** gerçek değerlerden tahmin edilen değerlerin ne kadar uzak olduğunu gösteren bir kavramdır. Ortalama öngörülen değerler gerçek değerlerden uzaksa, önyargı _(bias)_ yüksektir.

> Yüksek önyargıya sahip olmak, modelin çok basit olduğunu ve verilerin karmaşıklığını yakalamadığını _(underfitting)_ ve bu nedenle verilere uygun olmadığını gösterir. 🤕

### 🕹 Variance
- Varyans, belirli bir veri noktası için model tahmininin değişkenliği veya bize verilerimizin yayılmasını söyleyen bir değerdir.
- Varyansı yüksek olan model, daha önce görmediği verilerde genelleme yapamamaktadır.
- 
> Yüksek varyansa sahip olmak algoritmanın _training_ verilerindeki rastgele gürültüyü modellediğini ve verilerin üstüne geçtiğini _(overfitting)_ gösterir. 🤓

## 👀 Variance / Bias Visualization

<img src="../res/Fittings.png" width="450"  />


## ↘ While implementing the model..
İstenilen performansı elde edemezsek, modelimizi geliştirmek için şu soruları sormamız gerekir:

> Aşağıdaki çözümlerin performansını dev set üzerinden kontrol ediyoruz

1. Yüksek bias var mıdır? varsa, bu bir eğitim problemidir, yapılabilecekler:
   * Daha büyük ağı dene
   * Daha uzun eğit
   * Daha iyi optimizasyon algoritması dene
   * Başka bir NN mimarisini dene
  
> Bunun **yapısal** bir sorun olduğunu söyleyebiliriz 🤔

1. Yüksek varyans var mıdır? varsa, dev set performans problemidir, yapılabilecekler:
   * Daha fazla veri kullan
   * Düzenlileştirme _(Regularization)_ yap
     * L2, dropout, data augmentation
  
> Belki veri ya da algoritmik bir problem olduğunu söyleyebiliriz. 🤔

3. Yüksek varyans veya yüksek bias yok mu?

> TADAAA işimiz bitti 🤗🎉🎊

## 🧐 Referanslar
* [About Train, Validation and Test Sets in Machine Learning](https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7)
* [Bias and Variance in Machine Learning](https://medium.com/datadriveninvestor/bias-and-variance-in-machine-learning-51fdd38d1f86)