# 📚 Dizi Modellerinin Genel Kavramları 

## 👩‍🏫 Notasyon

Metin işleme bağlamında (örneğin: Doğal Dil İşleme _NLP_)

| Sembo            | Açıklama                                   |
| ---------------- |------------------------------------------- |
| $$X^{<t>}$$      | Giriş dizisindeki `t`'inci kelime          |
| $$Y^{<t>}$$      | Çıkış dizisindeki `t`'inci kelime          |
| $$X^{(i)<t>}$$   | `i`'inci giriş dizisindeki `t`'inci kelime |
| $$Y^{(i)<t>}$$   | `i`'inci çıkış dizisindeki `t`'inci kelime |
| $$T^{(i)}_x$$    | `i`'inci giriş dizisinin uzunluğu          |
| $$T^{(i)}_y$$    | `i`'inci çıkış dizisinin uzunluğu          |

## 🚀 One Hot Encoding
Kelimeleri temsil etmenin bir yolu, böylece onları kolayca kullanabiliriz

### 🔎 Örnek
Diyelim ki 10 kelimeden oluşan (🤭) bir sözlüğümüz var ve sözlükteki kelimeler: 
- Car, Pen, Girl, Berry, Apple, Likes, The, And, Boy, Book.

Ve Bizim $$X^{(i)}$$: **The Girl Likes Apple And Berry**

Böylece bu diziyi aşağıdaki gibi temsil edebiliriz 👀

```
Car   -0)  ⌈ 0 ⌉   ⌈ 0 ⌉   ⌈ 0 ⌉   ⌈ 0 ⌉  ⌈ 0 ⌉   ⌈ 0 ⌉ 
Pen   -1)  | 0 |  | 0 |  | 0 |  | 0 |  | 0 |  | 0 |
Girl  -2)  | 0 |  | 1 |  | 0 |  | 0 |  | 0 |  | 0 |
Berry -3)  | 0 |  | 0 |  | 0 |  | 0 |  | 0 |  | 1 |
Apple -4)  | 0 |  | 0 |  | 0 |  | 1 |  | 0 |  | 0 |
Likes -5)  | 0 |  | 0 |  | 1 |  | 0 |  | 0 |  | 0 |
The   -6)  | 1 |  | 0 |  | 0 |  | 0 |  | 0 |  | 0 |
And   -7)  | 0 |  | 0 |  | 0 |  | 0 |  | 1 |  | 0 |
Boy   -8)  | 0 |  | 0 |  | 0 |  | 0 |  | 0 |  | 0 |
Book  -9)  ⌊ 0 ⌋   ⌊ 0 ⌋   ⌊ 0 ⌋   ⌊ 0 ⌋  ⌊ 0 ⌋   ⌊ 0 ⌋
```

Dizileri bu şekilde temsil ederek verileri sinir ağlarına aktarabiliriz ✨

### 🙄 Dezavantaj
- Eğer sözlüğümüz 10.000 kelimeden oluşuyorsa, her vektör 10.000 boyutlu olacaktır 🤕 
- Bu gösterim anlamsal özellikleri yakalayamaz 💔

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/9-sequencemodels/0-generalconcepts)