# 🫁 AI Tuberculosis (TB) Detection Project

## 📌 Course Information
**Course:** CAP 4630 – Introduction to Artificial Intelligence  
**Team Members:**  
- Shelly Abramov 
- Barbara Freitas
- Gabriel Dolan 
- Dinesh Ramdeen  

---

## 🎯 Project Objective

The goal of this project is to develop an AI-based system that can detect Tuberculosis (TB) from medical imaging (such as chest X-rays).  

Tuberculosis is a serious infectious disease, and early detection is critical for effective treatment and reducing spread. Our system aims to assist in faster and more accurate diagnosis using machine learning/deep learning techniques.

---

## 🧠 Problem Statement

Manual diagnosis of TB from chest X-rays can be:
- Time-consuming
- Subject to human error
- Dependent on expert availability
- Not available in less developed areas

We aim to build a model that can automatically classify X-ray images as:
- TB Positive
- TB Negative

---

## 📊 Dataset

- Dataset used: Chest X-ray Dataset https://www.kaggle.com/datasets/muhammadrehan00/chest-xray-dataset 
- Type: Chest X-ray images
- Classes:
  - Tuberculosis (1)
  - Normal (0)

### Preprocessing steps:
- Image resizing
- Normalization
- Data augmentation 
- Train-validation-test split 70/15/15

---

## 🤖 Model Architecture

We experimented with the following models:
- CNN (Convolutional Neural Network)
- Transfer Learning models like MobileNetV2 and ResNet50

### Why this model?
- CNNs are effective for image classification tasks
- They automatically extract spatial features from images
- Good performance on medical imaging datasets

---

## ⚙️ Methodology / Pipeline

Our project follows this pipeline:

1. **Data Collection**
2. **Data Preprocessing**
   - Cleaning
   - Resizing images
   - Normalization
3. **Data Splitting**
   - Training set
   - Testing set
4. **Model Training**
5. **Model Evaluation**
6. **Prediction on New Images**

---

## 📈 Evaluation Metrics

We evaluated the models performance using:

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix

---

## 📊 Results

### CNN Model Performance:
- Accuracy: 72%
- Precision: 66%
- Recall: 91%
- F1 Score: 76%

### Observations:
- The model performed well on recall
- Some misclassifications occurred in precision
- Challenges included lighting

### Visualizations:
<img width="638" height="552" alt="Screenshot 2026-04-28 at 12 59 49 PM" src="https://github.com/user-attachments/assets/163d7591-8eb4-4df6-b23e-94cffe2acf9b" />



### MobileNetV2 Model Performance:
- Accuracy: 74%
- Precision: 69%
- Recall: 88%
- F1 Score: 77%

### Observations:
- The model performed well on recall
- Some misclassifications occurred in precision
- Challenges included coloring

### Visualizations:
<img width="654" height="586" alt="Screenshot 2026-04-28 at 1 01 16 PM" src="https://github.com/user-attachments/assets/37e472aa-326f-4c1d-9597-c05c24349489" />


### Resnet50 Model Performance:
- Accuracy: 75%
- Precision: 70%
- Recall: 90%
- F1 Score: 79%

### Observations:
- The model performed well on recall
- Some misclassifications occurred in precision
- Challenges included coloring

### Visualizations:
<img width="626" height="580" alt="Screenshot 2026-04-28 at 1 05 23 PM" src="https://github.com/user-attachments/assets/576ee2dd-7e72-4c23-a2e4-b5f5f748834c" />


---

## 🧩 Challenges

- Dataset imbalance
- Limited data size
- Image quality variations
- Overfitting issues (if applicable)

We addressed these using:
- Data augmentation
- Regularization techniques
- Hyperparameter tuning

---

## 🚀 Future Improvements

- Use larger and more diverse datasets
- Experiment with advanced architectures (e.g., EfficientNet)
- Deploy model as a web or mobile application
- Improve generalization performance

---

## 🎥 Presentation & Demo

- 📺 Video Presentation: https://docs.google.com/videos/d/1RmHA3k-J1RCnG9vuq9Icputsvz8YWvwSGK7TVWi-Jaw/play
- 💻 Demo Instructions: Upload an X-ray image for prediction
