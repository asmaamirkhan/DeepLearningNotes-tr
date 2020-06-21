---
description: "\U0001F680 CNN'leri Tarayıcıya Uygulama İle İlgili Notlar"
---

# 🌐 Tarayıcıda CNNler

CNN tabanlı çalışmalarımızı Tarayıcıda uygulamak için _Tensorflow.JS_ kullanmalıyız 🚀

## 👷‍♀️ İş Akışı

1. 🚙 Import [Tensorflow.js](https://js.tensorflow.org/)
2. 👷‍♀️ Modeli kur
3. 👩‍🏫 Eğit
4. 👩‍⚖️ Modeli kullan

### 🚙 Tensorflow.js' Import Etme

Tensorflow.js'yi aşağıdaki şekilde _import_ edebiliriz

```markup
    <script 
        src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest">
    </script>
```

### 👷‍♀️ Modeli Kurma

😎 Python'da yaptığımız gibi:

1. 🐣 _Sequential_ objesi tanımla
2. 👩‍🔧 Katmanları ekle
3. 🚀 Modeli derle `.compile()`
4. 👩‍🎓 Eğit _\(fit\)_
5. 🐥 Modeli tahmin için kullan

```javascript
// create sequential 
const model = tf.sequential();

// add layer(s)
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// set compiling parameters and compile the model
model.compile({loss:'meanSquaredError', 
                optimizer:'sgd'});

// get summary of the mdoel
model.summary();

// create sample data set
const xs = tf.tensor2d([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], [6, 1]);
const ys = tf.tensor2d([-3.0, -1.0, 2.0, 3.0, 5.0, 7.0], [6, 1]);

// train
doTraining(model).then(() => {
    // after training
    predict = model.predict(tf.tensor2d([10], [1,1]));
    predict.print();
});
```

> `([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], [6, 1])`
>
> `[-1.0, 0.0, 1.0, 2.0, 3.0, 4.0]`: Veri seti değerleri _\(girişler\)_
>
> `[6, 1]`: Girişin boyutu

#### 👁‍🗨 Dikkat

* 🐢 Eğitim uzun bir süreç olduğundan onu asenkron bir fonksiyonda yapmalıyız

```javascript
async function doTraining(model){
    const history = 
    await model.fit(xs, ys, 
        { epochs: 500,
            callbacks:{
                onEpochEnd: async(epoch, logs) =>{
                    console.log("Epoch:" 
                        + epoch 
                        + " Loss:" 
                        + logs.loss);

                }
            }
        });
}
```

## 👩‍💻 Kodun tamamı

* [🐾 Burada](https://github.com/asmaamirkhan/DeepLearningNotes-tr/tree/2b2468e60dccea9c260e8a24c5202ecf69ce34b2/1-HelloWorld/1-TFJS.html)

## 🌞 Yazının Aslı

* [🐾 Burada](https://dl.asmaamir.com/1-helloworld/b-cnnsinbrowser)

