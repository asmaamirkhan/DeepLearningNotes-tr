---
description: 🚪 Beginning to solve problems of computer vision with Tensorflow and Keras 
---
# 🚪 Introduction to Computer Vision

## 👗 What is MNIST?
The MNIST database: **(Modified National Institute of Standards and Technology database)**

* 🔎 Fashion-MNIST is consisting of a training set of 60,000 examples and a test set of 10,000 examples
* 🎨 Types:
  * 🔢 MNIST: for handwritten digits
  * 👗 Fashion-MNIST: for fashion
* 📃 Properties:
  * 🌚 Grayscale
  * 28x28 px
  * 10 different categories
  * [Repo](https://github.com/zalandoresearch/fashion-mnist)

## 📚 Important Terms
| Term            | Description   |
| --------------- |---------------|
| ➰ Sequential      | That defines a SEQUENCE of layers in the neural network |
| ⛓ Flatten         | Flatten just takes that square and turns it into a 1 dimensional set (used for input layer)   |
| 🔷 Dense           | Adds a layer of neurons |
| 💥 Activation Function | A formula that introduces non-linear properties to our Network |
| ✨ Relu         | An activation function by the rule: If X>0 return X, else return 0 |
| 🎨 Softmax         | An activation function that takes a set of values, and effectively picks the biggest one |

> The main purpose of activation function is to convert a input signal of a node in a NN to an output signal. That output signal now is used as a input in the next layer in the stack.

## 💫 Notes on performance
* Values in -MNIST are between 0-255 but neural networks work better with normalized data, so we can divide every value by 255 so the values are between 0,1.
* There are multiple criterias to stop trainig process, we can specify number of epochs or a threshold or both
  * Epochs: number of iterations
  * Threshold: a threshold for accuracy or loss after each iteration
  * Threhold with maximum number of epochs

> We can check the accuracy at the end of each epoch by Callbacks 💥

## 👩‍💻 My Codes
- [👗 Fashion MNIST](./0-Fashion-MNIST.ipynb)
- [1️⃣ Digit MNIST](./1-DIGIT-MNIST.ipynb)

## 🧐 References
* [Official Documentation of Keras](https://keras.io/)
* [More About Activation Functions](https://keras.io/activations/)
