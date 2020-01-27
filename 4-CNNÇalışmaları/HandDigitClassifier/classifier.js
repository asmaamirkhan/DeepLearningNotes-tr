import { MNISTData } from "./MNISTData.js";
var canvas, ctx, saveButton, clearButton;
var pos = { x: 0, y: 0 };
var rawImage;
var model;

function initModel() {
  // create sequential
  model = tf.sequential();

  // add first conv layer
  model.add(
    tf.layers.conv2d({
      inputShape: [28, 28, 1],
      kernelSize: 3,
      filters: 8,
      activation: "relu"
    })
  );

  // add pooling layer
  model.add(
    tf.layers.maxPooling2d({
      poolsize: [2, 2]
    })
  );

  // add second convolution layer
  model.add(
    tf.layers.conv2d({
      kernelSize: 3,
      filters: 16,
      activation: "relu"
    })
  );

  // add pooling layer
  model.add(
    tf.layers.maxPooling2d({
      poolsize: [2, 2]
    })
  );

  // add flatten layer (End of convs)
  model.add(tf.layers.flatten());

  //  add dense layer(s)
  model.add(tf.layers.dense({ units: 128, activation: "relu" }));

  // add last layer (has 10 units, number of classes)
  model.add(tf.layers.dense({ units: 10, activation: "softmax" }));

  // set compiling settings
  model.compile({
    optimizer: tf.train.adam(),
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"]
  });

  return model;
}

async function train(model, data) {
  const metrics = ["loss", "val_loss", "acc", "val_acc"];
  const container = { name: "Model Training", styles: { height: "640px" } };
  const fitCallbacks = tfvis.show.fitCallbacks(container, metrics);

  const BATCH_SIZE = 512;
  const TRAIN_DATA_SIZE = 5500;
  const TEST_DATA_SIZE = 1000;

  const [X_train, Y_train] = tf.tidy(() => {
    const d = data.nextTrainBatch(TRAIN_DATA_SIZE);
    return [d.xs.reshape([TRAIN_DATA_SIZE, 28, 28, 1]), d.labels];
  });

  const [X_test, Y_test] = tf.tidy(() => {
    const d = data.nextTestBatch(TEST_DATA_SIZE);
    return [d.xs.reshape([TEST_DATA_SIZE, 28, 28, 1]), d.labels];
  });

  return model.fit(X_train, Y_train, {
    batchSize: BATCH_SIZE,
    validationData: [X_test, Y_test],
    epochs: 20,
    shuffle: true,
    callbacks: fitCallbacks
  });
}

function setPosition(e) {
  pos.x = e.clientX - 100;
  pos.y = e.clientY - 100;
}

function draw(e) {
  if (e.buttons != 1) return;
  ctx.beginPath();
  ctx.lineWidth = 24;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  rawImage.src = canvas.toDataURL("image/png");
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function save() {
  let raw = tf.browser.fromPixels(rawImage, 1);
  let resized = tf.image.resizeBilinear(raw, [28, 28]);
  let tensor = resized.expandDims(0);
  let prediction = model.predict(tensor);
  let pIndex = tf.argMax(prediction, 1).dataSync();

  alert(pIndex);
}

function init() {
  canvas = document.getElementById("digit_canvas");
  rawImage = document.getElementById("canvas_image");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousedown", setPosition);
  canvas.addEventListener("mouseenter", setPosition);
  saveButton = document.getElementById("save_button");
  saveButton.addEventListener("click", save);
  clearButton = document.getElementById("clear_button");
  clearButton.addEventListener("click", clear);
}

async function main() {
  const data = new MNISTData();
  await data.load();
  const model = initModel();
  tfvis.show.modelSummary({ name: "Model Arch" }, model);
  await train(model, data);
  init();
  alert("I have learnt 👶, now I can recognize your digits 👩‍🎓, try me! 😉");
}

document.addEventListener("DOMContentLoaded", main);
