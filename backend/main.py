from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model("tb_cnn_model_best.keras")

THRESHOLD = 0.3

def preprocess_image(contents):
    image = Image.open(io.BytesIO(contents)).convert("L")
    image = image.resize((224, 224))

    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=-1)
    image_array = np.expand_dims(image_array, axis=0)

    return image_array

@app.get("/")
def home():
    return {"message": "AI Lung Disease Detector API is running"}

@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    contents = await image.read()
    processed_image = preprocess_image(contents)

    probability = float(model.predict(processed_image)[0][0])

    if probability >= THRESHOLD:
        prediction = "Tuberculosis"
        confidence = probability
    else:
        prediction = "Normal"
        confidence = 1 - probability

    return {
        "prediction": prediction,
        "confidence": round(confidence * 100, 2),
        "tuberculosis_probability": round(probability * 100, 2)
    }