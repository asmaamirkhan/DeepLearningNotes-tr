# 💥 Activation Functions in Neural Networks
The main purpose of Activation Functions is to convert an input signal of a node in a A-NN to an output signal by applying a transformation. That output signal now is used as a input in the next layer in the stack.

## 📃 Types of Activaiton Functions

| Function                   | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| Linear Activation Function |  Inefficient, used in regression                         |
| Sigmoid Function           |  Good for output layer in binary classification problems |
| Tanh Function              |  Better than sigmoid                                     |
| Relu Function :sparkles:   |  Default choice for hidden layers                        |
| Leaky Relu Function        |  Little bit better than Relu, Relu is more popular       |


### 📈 Linear Activation Function (Identity Function)

**Formula:**

<img src="../res/formulas/LinearActivation.png" height="30"  />


**Graph:**

<img src="../res/LinearActivationGraph.png" width="300"  />

> It can be used in regression problem in the output layer 

### 🎩 Sigmoid Function

**Formula:**

<img src="../res/formulas/Sigmoid.png" height="40"  />


**Graph:**

<img src="../res/SigmoidGraph.png" width="300"  />


### 🎩 Tangent Function

Almost always strictly superior than sigmoid function

**Formula:**

<img src="../res/formulas/Tanh.png" height="40"  />

> Shifted version of the Sigmoid function 🤔

**Graph:**

<img src="../res/TanhGraph.PNG" width="300"  />



> Activation functions can be different for different layers, for example, we may use _tanh_ for a hidden layer and _sigmoid_ for the output layer 

### 🙄 Downsides on Tanh and Sigmoid
If z is very large or very small then the derivative _(or the slope)_ of these function becomes very small (ends up  being close to 0), and so this can slow down gradient descent 🐢

### 🎩 Rectified Linear Activation Unit (Relu :sparkles:) 
Another and very popular choice

**Formula:**

<img src="../res/formulas/Relu.png" height="50"  />


**Graph:**

<img src="../res/ReluGraph.png" width="300"  />


So the derivative is 1 when z is positive and 0 when z is negative
> *Disadvantage:* derivative=0 wen z is negative 😐



### 🎩 Leaky Relu

**Formula:**

<img src="../res/formulas/LeakyRelu.png" height="50"  />


**Graph:**

<img src="../res/LeakyReluGraph.png" width="300"  />


**Or:** 😛

<img src="../res/LeakyReluGraphMeme.png" width="150"  />


### 🎀 Advantages of Relu's
* A lot of the space of z the derivative of the activation function is very different from 0
* NN will learn much faster than when using tanh or sigmoid    


## 🤔 Why NNs Need non-linear Activation Functions
Well, if we use linear function then the nn is just outputting a linear function of the input, so no matter how many layers out NN has 🙄, all it is doing is just computing a linear function 😕

> Remember that the composition of two linear functions is itself a linear function

## 👩‍🏫 Rules For Choosing Activation Function
* If the output is 0 or 1 (binary classification) ➡ *sigmoid* is good for output layer
* for all other units ➡ *Relu* :sparkles:
  
> We can say that relu is the default choice for activation function

Note:

> If you are not sure which one of these functions work best 😵, try them all 🤕 and evaluate on different validation set and see which one works better and go with that  🤓😇

## 🧐 Read More
* [Which Activation Function Should I Use? (Siraj Raval :sparkles:)](https://www.youtube.com/watch?v=-7scQpJT7uo)
* [Activation Functions in Neural Networks](https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6)
* [Understanding Activation Functions in Neural Networks](https://medium.com/the-theory-of-everything/understanding-activation-functions-in-neural-networks-9491262884e0)
