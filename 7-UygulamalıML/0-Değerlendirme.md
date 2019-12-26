# 👩‍🔧 Makine Öğrenimi Projelerinin Yapılandırılması Üzerine Notlar

## ✨ Değerlendirme metrikleri nasıl etkili bir şekilde ayarlanır?
* Precesion'a _P_ ve recall'a _R_ bakarken (örneğin) en iyi modeli doğru şekilde seçemeyebiliriz
  * Bu yüzden _P_ ve _R_ arasında bir ilişki kurabilecek yeni bir değerlendirme ölçütü oluşturmalıyız.
  * Şimdi yeni ölçümümüz sayesinde en iyi modeli seçebiliriz 🐣
  * Örneğin: (popüler bir değerlendirme ölçütü olarak) _F1 Score_:
    * $$F1 = \frac{2}{\frac{1}{P}+\frac{1}{R}}$$

> Özetle: En iyi seçimi yapabilmek için modellerimiz ve değerlerimiz sayesinde kendi değerlendirme ölçümlerimizi oluşturabiliriz 👩‍🏫

## 📚 Değerlendirme Ölçütleri Türleri

Daha iyi bir değerlendirme için, ölçümlerimizi şu şekilde sınıflandırmamız gerekir:

| Değerlendirme Ölçütü Türü | Açıklama                                    |
| ------------------------- | ---------------------------------------------- |
| ✨ Optimizing Metric     |  **En iyi** değerde olması gereken bir ölçüm |
| 🤗 Satisficing Metric (tatmin edici) |  Sadece **yeterince iyi** olması gereken bir ölçüm  |

Teknik olarak, Eğer `N` ölçümümüz varsa, `1` ölçüyü optimize etmeye çalışırız ve `N-1` ölçüyü _yeterince iyi_ hale getirmeliyiz 🙄 

> 🙌 Açıklama: belirlediğimiz bir _eşik_ değerine göre tatmin edici ölçütlerini ayarlıyoruz

## 🚀 Verimliliği en üst düzeye çıkarmak için veri kümeleri nasıl ayarlanır?
* Dev ve test setlerini aynı dağıtımdan _distribution_ seçmemiz gerekiyor, bu yüzden verileri önce rastgele karıştırmamız sonra bölmemiz gerekir.
* Sonuç olarak, hem test hem de dev setlerinin tüm kategorilerden veriler içerir ✨

### 👩‍🏫 Öneri
Gelecekte almayı umduğumuz verileri yansıtmak için -_aynı dağıtımdan(distribution)_-  bir dev ve test seti seçmeliyiz

## 🤔 Kümelerin boyutu nasıl seçilir?
* Eğer küçük bir veri setimiz varsa (m < 10,000)
  * 60% training, 20% dev, 20% test iyi olacaktır 
* Eğer kocaman veri setimiz varsa (örneğin 1M)
  * 99% trainig, %1 dev, 1% test makul olabilir 

> Ve böylece, bu iki durumu göz önünde bulundurarak doğru oranı seçebiliriz 👮

## 🙄 Dev/test setleri ve değerlendirme ölçütleri ne zaman değiştirilmeli?
**Öneri:** Eğer dev/test setleri değerlendirme ölçütüyle iyi çalışıyorsa ve gerçek hayat uygulamasında iyi çalışmıyorsa dev/test setlerini ve/veya değerlendirme ölçütü değiştirilmelidir 🏳 

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/7-appliedml/0-evaluation)