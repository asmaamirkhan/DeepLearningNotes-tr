---
description: Notes on Implementing CNNs In The Browser
---

# 🌐 CNNs In Browser
To implement our CNN based works in the Browser we need to use _Tensorflow.JS_ 🚀

## 👷‍♀️ Workflow
1. 🚙 Import [Tensorflow.js](https://js.tensorflow.org/)
2. 👷‍♀️ Create models
3. 👩‍🏫 Train
4. 👩‍⚖️ Do inference

### 🚙 Importing Tensorflow.js
We can import Tensorflow.js in the way below
```html
    <script 
        src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest">
    </script>

```

### 👷‍♀️ Creating The Model
😎 Same as we did in Python:

1. 🐣 Decalre a Sequential object
2. 👩‍🔧 Add layers
3. 🚀 Compile the model
4. 👩‍🎓 Train _(fit)_
5. 🐥 Use the model to predict

```js
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
> `[-1.0, 0.0, 1.0, 2.0, 3.0, 4.0]`: Data set values
> 
> `[6, 1]`: Shape of input


#### 👁‍🗨 Attention
- 🐢 Training is a long process so that we have to do it in an asynchronous function
```js
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



## 👩‍💻 Full Code
- [🐾 Here](./1-TFJS.html)