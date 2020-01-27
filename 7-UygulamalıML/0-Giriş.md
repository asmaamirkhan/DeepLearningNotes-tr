---
description: 👷‍♀️ Makine Öğrenimi Projelerini Yapılandırma Talimatları
---

# 🌱 Giriş

## 👩‍🎓 Orthogonalisation
Makine öğrenim sistemlerinin kurulmasındaki zorluklardan biri, deneyebileceğimiz pek çok şeyin olması 🙄. Örneğin, ayarlayabildiğimiz çok fazla hiperparametre mevcut.
**İstenen etkiyi elde etmek için hangi parametrenin ayarlanacağını bilme sanatına orthogonalisation denir**.

Bir ML projesini değerlendirirken nelere dikkat etmeliyiz? Onu nasıl optimize ederiz? Nasıl hızlandırırız? Birçok parametre olduğundan ayarlanması gereken hiperperemtre nasıl seçilir? seçilen hiperparametre nasıl ayarlanır? 🤔🤕 

Bu soruları cevaplamadan önce süreci bir bütün olarak inceleyelim 🧐

## ⛓ ML'deki Varsayımlar Zinciri
**Modelde olması gereken:**

**Training** seti maliyet fonksiyonuna göre iyi çalışmalı  (Human level performance ❌❌)

⬇

**Dev** seti maliyet fonksiyonuna göre iyi çalışmalı

⬇

**Test** seti maliyet fonksiyonuna göre iyi çalışmalı

⬇

**Gerçek hayatta** iyi çalışmalı ✨

> Neyin yanlış olduğunu bulmak, uygun bir çözüm seçmemize ve daha sonra projeyi etkilemeden bu kısmı düzeltmemize yardımcı olabilir.  👩‍🔧

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/7-appliedml)