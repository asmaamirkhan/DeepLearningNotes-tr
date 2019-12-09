# 👵 Klasik Evrişimli Sinir Ağları

| Ağ         | İlk Kullanım   |
| ---------- | -------------- |
| LeNet-5    | Elle yazılmış basamak sınıflandırması |
| AlexNet    | ImageNet Dataset |
| VGG-16     | ImageNet Dataset |


## 🔢 LeNet-5
LeNet-5 çok basit bir ağdır - Modern standartlara göre -. Sadece 7 katmanı vardır
-  bunların arasında 3 evrişim katmanı vardır _(C1, C3 and C5)_
-  2 sub-sampling (pooling) katmanları _(S2 and S4)_
-  1 fully connected katman _(F6)_
-  Çıkış katmanı

### 👀 Ağın Görselleştirilmesi
<img src="../res/LeNet5Arch.png" width="500"  />


### 🙌 Ağın Özeti 
<img src="../res/LeNetSummay.jpg" width="450"  />

## 🛸 AlexNet

- LeNet-5' çok benziyor
- Katman başına daha fazla filtresi vardır
-  _tanh_ yerine _ReLU_ kullanıyor
- _SGD_ with momentum
- regularaization yerine dropout kullanıyor

### 👀 Ağın Görselleştirilmesi
<img src="../res/AlexNetArch.png" width="500"  />

### 🔎 Daha Ayrınıtılı
<img src="../res/AlexNet.gif" width="500"  />

### 🙌 Ağın Özeti
<img src="../res/AlexNetSummary.jpg" width="450"  />

## 🌱 VGG-16

### 👀 Ağın Görselleştirilmesi
<img src="../res/VGGArch.jpg" width="500"  />

### 🙌 Ağın Özeti
<img src="../res/VGG16Summary.jpg" width="450"  />

### 🔎 Daha Ayrınıtılı
<img src="../res/VGG.gif" width="500"  />

### 😐 Olumsuz Yanları
- It is painfully slow to train (It has 138 million parameters 🙄)

## 👩‍🔧 Emplementasyon
- [Implementation of AlexNet](https://github.com/pytorch/vision/blob/master/torchvision/models/alexnet.py   )

## 🧐 Daha Fazla Oku
- [Detailed LeNet-5](https://engmrk.com/lenet-5-a-classic-cnn-architecture/)
- [Detailed AlexNet](https://engmrk.com/alexnet-implementation-using-keras/)
- [Detailed VGG-16](https://engmrk.com/vgg16-implementation-using-keras/)
- [Summary of classic networks](https://medium.com/analytics-vidhya/cnns-architectures-lenet-alexnet-vgg-googlenet-resnet-and-more-666091488df5)