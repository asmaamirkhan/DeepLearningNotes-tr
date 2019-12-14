# 🌌 RNN'deki Vanishing Gradients
- 10.000 zaman adımı büyüklüğünde bir dizi verisini işleyen bir RNN, optimize edilmesi çok zor olan 10.000 derin katmana sahiptir 🙄
- Derin Sinir Ağlarında da, daha derin ağlar _vanishing gradient_ problem sorununa giriyor 🥽 
- Bu da, uzun dizi boyutuna sahip RNN'lerde de olur 🐛

## 🧙‍♀️ Çözümler
- **GRU** _Gated Recurrent Unit_ 
- **LSTM** _Long Short-Term Memory_ 

## 🚪 Gated Recurrent Unit (GRU)
GRU'lar standart tekrarlayan sinir ağlarının gelişmiş versiyonlarıdır ✨, GRU _güncelleme kapısı ve sıfırlama kapısını_ kullanır 
- Temel olarak, bunlar çıktıya hangi bilgilerin aktarılması gerektiğine karar veren iki vektördür
- Onlarla ilgili özel olan şey, bilgiyi uzun zaman önce tutmak için eğitilebilecekleridir
  - Zamanla kaybolmadan veya tahminle ilgili bilgileri çıkarmadan
  
| Kapı                 | Açıklama                                    |
| -------------------- |---------------------------------------------|
| 🔁 Güncelleme Kapısı | Modele, geçmiş bilgilerin ne kadarının (önceki zaman adımlarından) geleceğe aktarılması gerektiğini belirlemede yardımcı olur |
| 0️⃣ Sıfırlama Kapısı  | Modele, geçmiş bilgilerin ne kadarının **unutacağına** karar vermede yardımcı olur |

### 🔁 Güncelleme Kapısı
Bu kapı göz önüne alındığında, _vanishing gradient_ problemi ortadan kalkar çünkü model kendi başına geçmiş bilgilerin ne kadarını geleceğe taşıdığını öğreniyor.
> Kısaca: Şimdi ne kadar geçmiş önemli olmalı? 🙄

### 0️⃣ Sıfırlama Kapısı
Geçmiş bilgilerinin ne kadarının unutulacağına karar vermek için model tarafından kullanıldığından, bu kapı güncelleme kapısıyla karşılaştırıldığında tam tersi bir işlevselliğe sahiptir.
> Kısaca: Önceki bilgi düşürülecek mi? 🙄

### 💬 Current Memory Content
Geçmişten ilgili bilgileri saklamak için sıfırlama kapısını kullanacak bellek içeriği.

### 🎈 Final Memory at Current Time Step
Mevcut birim için bilgi tutan ve onu daha sonra ağa iletecek bir vektör.

### 👀 Görselleştirme

<img src="../res/GRU.png" width="600"  />

### 🎉 GRU Özeti
- **vanishing gradient** problemni gidermek için bir çözümdür 
- Model her seferinde yeni girişi kaybetmekte kalmıyor, ilgili bilgileri saklıyor ve ağın bir sonraki zaman adımlarına aktarıyor

## 🤸‍♀️ Long Short-Term Memory

### 0️⃣ Forget Gate
- Let's assume we are reading words in a piece of text, and want use an LSTM to keep track of grammatical structures, such as whether the subject is singular or plural. 
- If the subject changes from a singular word to a plural word, we need to find a way to get rid of our previously stored memory value of the singular/plural state. 
- In an LSTM, the forget gate let's us do this:

$$\Gamma ^{<t>}_f = \sigma(W_f[a^{<t-1>}, x^{<t>}]+b_f)$$

- Here,  $W_f$  are weights that govern the forget gate's behavior. We concatenate  $$[a^{<t-1>}, x^{<t>}]$$  and multiply by  $$W_f$$. The equation above results in a vector  $$\Gamma_f^{<t>}$$  with values between 0 and 1. 
- This forget gate vector will be multiplied element-wise by the previous cell state $$c^{<t-1>}$$. 
- So if one of the values of $$\Gamma_f^{<t>}$$ is 0 (or close to 0) then it means that the LSTM should remove that piece of information (e.g. the singular subject) in the corresponding component of  $$c^{<t-1>}$$ . 
- If one of the values is 1, then it will keep the information.

### 🔄 Update Gate
Once we forget that the subject being discussed is singular, we need to find a way to update it to reflect that the new subject is now plural. Here is the formula for the update gate:

$$\Gamma ^{<t>}_u = \sigma(W_u[a^{<t-1>}, x^{<t>}]+b_u)$$

Similar to the forget gate, here  $$\Gamma_u^{<t>}$$  is again a vector of values between 0 and 1. This will be multiplied element-wise with  $$\tilde{c}^{<t>}$$, in order to compute $$c^{⟨t⟩}$$.

### 👩‍🔧 Updating the Cell
To update the new subject we need to create a new vector of numbers that we can add to our previous cell state. The equation we use is:

$$\tilde{c}^{<t>}=tanh(W_c[a^{<t-1>}, x^{<t>}]+b_c)$$

Finally, the new cell state is:

$$c^{<t>}=\Gamma _f^{<t>}*c^{<t-1>} + \Gamma _u^{<t>}*\tilde{c}^{<t>}$$

### 🚪 Output Gate
To decide which outputs we will use, we will use the following two formulas:

$$\Gamma _o^{<t>}=\sigma(W_o[a^{<t-1>}, x^{<t>}]+b_o)$$

$$a^{<t>} = \Gamma _o^{<t>}*tanh(c^{<t>})$$

Where in equation 5 you decide what to output using a sigmoid function and in equation 6 you multiply that by the _tanh_ of the previous state.

<img src="../res/RNNLSTM.png" width="600"  />

> GRU is newer than LSTM, LSTM is more powerful but GRU is easier to implement 🚧

## 🧐 Read More
- [What are RNNs and GRUs](https://towardsdatascience.com/what-is-a-recurrent-nns-and-gated-recurrent-unit-grus-ea71d2a05a69)
- [Understanding GRU Networks](https://towardsdatascience.com/understanding-gru-networks-2ef37df6c9be)
- [Detailed LSTM](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)