---
description: Adım Adım Özel Nesne Algılayıcısı Eğitimi
---

# 🤖 TensorFlow Object Detection API

## 🌱 Giriş

* ✨ Tensorflow Object Detection API, güçlü AI bilgimiz veya güçlü TensorFlow bilgimiz olmasa bile önceden eğitilmiş modellere bağlı olarak özel nesne algılayıcısı oluşturmamızı sağlayan güçlü bir araçtır.
* 💁‍♀️ Önceden eğitilmiş modellere bağlı modeller oluşturmak, çok güçlü makineler kullanarak haftalarca eğitilmiş modelleri kullandığımız için bize çok fazla zaman ve iş gücü kazandırır, bu strateji [**Öğrenme Aktarması \(Transfer Learning\)**](https://dltr.asmaamir.com/5-dlstratejileri/b-transferlearning) olarak adlandırılır.
* 🗃️ Veri seti olarak, OpenImages veri kümesinin nasıl kullanılacağını ve verilerinin TensorFlow dostu formata nasıl dönüştürüleceğini göstereceğim.

## 🚩 Geliştirme Hattı

1. 👩‍💻 Ortamı Hazırlama 
2. 🖼️ Resim Toplama 
3. 🤹‍♀️ Resim Organizasyonu 
4. 🤖 Model Seçimi 
5. 👩‍🔧 Model Konfigürasyonu 
6. 👶 Eğitim 
7. 👮‍♀️ Değerlendirme 
8. 👒 Modeli Dışa Aktarma 
9. 📱 Tflite'ye dönüştürme

{% hint style="info" %}
🤕 Talimatları uygularken hata alırsanız makalenin sonundaki 🐞 Genel Sorunlar bölümüne bakabilirsiniz.
{% endhint %}

## 👩‍💻 Ortamı Hazırlama

### 🔸 Ortam Bilgisi

| 💻 Platform | 🏷️ Versiyon |
| :--- | :--- |
| Python  | 3.7 |
| TensorFlow  | 1.15 |

### 🥦 Conda env Ayarlama

#### 🔮 Yeni env Oluşturma

* 🥦 [**Anaconda**](https://www.anaconda.com/)'yı indirin
* 💻 CMD'yi açıp aşağıdaki komutu çalıştırın:

```bash
# conda create -n <ENV_İSMİ> python=<İSTENEN_VERSİYON>
conda create -n tf1 python=3.7
```

#### ▶️ Yeni env'i Aktifleştirme

```bash
# conda activate <ENV_NAME>
conda activate tf1
```

### 🔽 Paketleri İndirme

#### 💥 GPU vs CPU İşleyişi

| 🚙 CPU | 🚀 GPU |
| :--- | :--- |
| **Brain** of computer | **Brawn** of computer |
| Very few complex cores | hundreds of simpler cores with parallel architecture |
| single-thread performance optimization | thousands of concurrent hardware threads |
| Can do a bit of everything, but not great at much | Good for math heavy processes |

#### 🚀  TensorFlow Kurulumu

{% tabs %}
{% tab title="🚀 GPU" %}
```bash
conda install tensorflow-gpu=1.15
```
{% endtab %}

{% tab title="🚙 CPU" %}
```bash
conda install tensorflow=1.15
```
{% endtab %}
{% endtabs %}

#### 📦 Diğer Paketlerin Kurulumu

```bash
conda install pillow Cython lxml jupyter matplotlib
```

```bash
conda install -c anaconda protobuf
```

