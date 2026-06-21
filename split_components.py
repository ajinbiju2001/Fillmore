from PIL import Image
import numpy as np
import cv2
import os

img = Image.open("/Users/ajinb/Documents/Fillmore /public/images/exploded_burger_transparent.png")
arr = np.array(img)

alpha = arr[:, :, 3]
# Threshold alpha
_, thresh = cv2.threshold(alpha, 10, 255, cv2.THRESH_BINARY)

# Find connected components
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(thresh, connectivity=8)

print(f"Found {num_labels - 1} connected components.")

# We want the 5 largest components
# Sort by area (stat[4])
areas = [(i, stats[i, cv2.CC_STAT_AREA]) for i in range(1, num_labels)]
areas.sort(key=lambda x: x[1], reverse=True)

for rank, (i, area) in enumerate(areas[:10]):
    print(f"Component {i}: area={area}, y={stats[i, cv2.CC_STAT_TOP]}")

