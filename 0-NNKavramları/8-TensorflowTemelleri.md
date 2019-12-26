# 🏃‍♀️ Tensorflow'ya Hızlı Giriş

## 🚩 Tensorflow'daki programların ana akışı
1. Daha _execute_ edilmemiş _tensor_'ları oluştur
2. _Tensor_'ların arasındaki işlemeleri yaz
3. _Tensor_'ları başlat _(initialize)_
4. Bir _Session_ oluştur
5. _Session_'ı çalıştır. Bu, yukarıda yazdığın işlemleri yürütecektir.

> Özetle, değişkenleri başlatm, bir _Session_ oluştur ve _Session_'ın içindeki işlemleri çalıştır 👩‍🏫

## 👩‍💻 Kod Örneği
Aşağıdaki formülü hesaplamak için:

$$loss=L(\hat{y},y)=(\hat{y}^{(i)}-y^{(i)})^2$$

```python
# Tensörleri oluşturma ve arasındaki işlemi yapma 
y_hat = tf.constant(36, name='y_hat')
y = tf.constant(39, name='y')
loss = tf.Variable((y - y_hat)**2, name='loss')

# Tensörleri başlatma
init = tf.global_variables_initializer()

# Session oluşturma
with tf.Session() as session: 
    # İşlemeleri çalıştırma
    session.run(init) 

    # Sonuçları yazdırma
    print(session.run(loss)) 
```

> _Loss_ için bir değişken oluşturduğumuzda, _loss_'u basitçe diğer miktarların bir fonksiyonu olarak tanımladık, ancak değerini değerlendirmedik. Bunu değerlendirmek için _initializer_'ı kullanırız.

## ❗ Değişken Başlatma _(initalization)_ Hakkında Not

Aşağıdaki kod için

```python
a = tf.constant(2)
b = tf.constant(10)
c = tf.multiply(a,b)
print(c)
```

🤸‍♀️ Çıktı:

```
Tensor("Mul:0", shape=(), dtype=int32)
```

Beklendiği gibi, 20 görmeyeceğiz 🤓! Sonucun _shape attribute_'u olmayan ve "int32" türünde bir tensör olduğunu söyleyen bir tensörümüz var. Tek yaptığımız **'computation graph'** koymaktı, ancak henüz bu hesaplamayı çalıştırmadık.

## 📦 TF'deki Placeholders 
- Yer tutucu _placeholder_, değerini **ancak daha sonra** belirleyebileceğiniz bir nesnedir. Bir yer tutucunun değerlerini belirtmek için, bir `feed dictionary` kullanarak değerleri iletebiliriz.
- Aşağıda, x için bir yer tutucu oluşturuldu. Bu, Session'ı çalıştırdığımızda daha sonra bir sayı girmemizi sağlar.

```python
x = tf.placeholder(tf.int64, name = 'x')
print(sess.run(2 * x, feed_dict = {x: 3}))
sess.close()
```

## 🎀 Daha Fazla Örnek
_Sigmoid_ Fonksiyonun değerini TF ile hesaplamak

```python
def sigmoid(z):
    """
    z değeri için sigmoid fonksiyonunu hesaplar
    
    Argümanlar:
    z -- giriş değeri, skaler veya vectör
    
    Dönüş değeri: 
    results -- z'nin sigmoid değeri 
    """
    
    # x için yertutucu tanımlama. adı da 'x'.
    x =  tf.placeholder(tf.float32, name = 'x')

    # sigmoid(x)'i hesaplama
    sigmoid = tf.sigmoid(x)

    # session oluşturma, ve çalıştırma.
    with tf.Session() as sess:
        # session'ı çalıştırma ve sonuçları output'a (result'a) atama
        result = sess.run(sigmoid, feed_dict = {x: z})
        
    return result
```

_Cost_ Fonksiyonun değerini TF ile hesaplamak

```python
def cost(logits, labels):
    """
    sigmoid cross entropy ile cost fonksiyonunun değerini hesaplar
    
    Argümanlar:
    logits -- z'yi içeren bir vektör, Son lineer ünitenin çıktısı (son sigmoid aktivasyonundan önce)
    labels -- y - etiket vektörü (1 veya 0) 
    
    Dönüş Değeri:
    cost -- Cost fonksiyonunun session'ını çalıştırır
    """
    
    # "logits" (z) ve "labels" (y) için yer tutucu oluşturma 
    z = tf.placeholder(tf.float32, name = 'z')
    y = tf.placeholder(tf.float32, name = 'y')
    
    # Loss fonksiyonunu kullanma
    cost = tf.nn.sigmoid_cross_entropy_with_logits(logits = z,  labels = y)
    
    # Session oluşturma
    sess = tf.Session()
    
    # Session'ı çalıştırma 
    cost = sess.run(cost, feed_dict = {z: logits, y: labels})
    
    # Session'ı kapatma
    sess.close()
        
    return cost
```

## 🌞 Yazının Aslı
- [Burada 🐾](https://dl.asmaamir.com/0-nnconcepts/8-tensorflowbasics)