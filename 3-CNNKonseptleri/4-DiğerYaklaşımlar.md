# ✨ CNN'leri Kurmak İçin Diğer Yaklaşımlar 
| Yaklaşım   | Açıklama      |
| ---------- |---------------|
| Residual Networks | Derin NN'lerde **vanishing gradient** sorununu önlemek için bir yaklaşım |
| One By One Convolution | **Renk Kanallarında** filtre uygulanması |

## 🔄 Residual Networks
### 🙄 Problem 
Bir sinir ağı eğitiminin her iterasyon sırasında, tüm ağırlıklar, mevcut ağırlığa göre hata fonksiyonunun kısmi türeviyle orantılı bir güncelleme alır.
Eğer gradyan çok küçükse, ağırlıklar etkili bir şekilde değişmeyecek ve sinir ağını ileri eğitimden tamamen durdurabilir 🙄😪. Bu olaya _vanishing gradients_ denir 🙁

> Basitçe 😅: Çok yavaş _gradient descent_ nedeniyle verilerin derin sinir ağının katmanları arasında kaybolduğunu söyleyebiliriz

ResNet'in ana fikri, aşağıdaki gibi bir veya daha fazla katmanı atlayan **identity shortcut connection** sunmaktır.

<img src="../res/ResNetConcept.png" width="300"  />

### 🙌 Düz Ağlar vs ResNet'ler
<img src="../res/PlainVsRes.jpg" width="400"  />

### 👀 Görselleştirme
<img src="../res/ResNetVisualization.png" width="600"  />

## 🤗 Avantajlar
- Bloklardan birinin **identitiy** fonksiyonunu öğrenmesi kolay
- Performansa zarar vermeden daha derine gidebilir 
  - Düz NN'lerde, **vanishing and exploding gradients** problemleri nedeniyle, ağın performansı derinleştikçe azalmaktadır. 

## 1️⃣ One By One Convolutions
### Propblem (Yada motivasyon 🤔)
_Pooling_ ve çeşitli evrişim uygulayarak girişlerin boyutunu azaltabiliriz, bu filtreler girişin görüntüsünün yüksekliğini ve genişliğini azaltabilir; peki renk kuralları ne oluyor? 🌈, başka bir deyişle **derinliği** ne oluyor?

### 🤸‍♀️ Çözüm
Bir CNN çıktısının derinliğinin girişte uyguladığımız filtre sayısına eşit olduğunu biliyoruz;

<img src="../res/ConvMulti.png" width="400"  />

Yukarıdaki örnekte **2** filtre uyguladık, böylece çıkış derinliği **2**

CNN'lerimizi geliştirmek için bu bilgiyi nasıl kullanabiliriz? 🙄

Diyelim ki `28x28x192` boyutlu girişimiz var, `1x1x192` boyutunda `32` filtre ve [SAME](./1-GenelKavramlar-P2.md#same-convolutions) padding uygularsak çıkışımız `28x28x32` ✨

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/3-cnnconcepts/4-otherapproaches)

## 🧐 Daha Fazla Oku
- [Detailed ResNets](https://engmrk.com/residual-networks-resnets/)